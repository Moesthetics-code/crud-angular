import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importer Router
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { NgForOf } from '@angular/common';
@Component({
  standalone: true,  // Déclare le composant comme autonome
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [NgForOf],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router  // Injecter le service Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.loadUsers();  // Recharger la liste après suppression
  }

  editUser(id: number): void {
    console.log(id);  // Vérifiez l'ID passé
    this.router.navigate(['/edit', id]);  // Rediriger vers la page de modification avec l'ID
  }

  createNewUser (): void {
    this.router.navigate(['/create']);
  }

}
