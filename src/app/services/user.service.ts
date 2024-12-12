import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: number): Observable<User> {
    const user = this.users.find((u) => u.id === id);
    console.log(user);  // Vérifiez si l'utilisateur est correctement trouvé
    return of(user || { id: 0, name: '', email: '' });
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(id: number, updatedUser: User): Observable<void> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
    return of();  // Retourne un Observable de type void
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
