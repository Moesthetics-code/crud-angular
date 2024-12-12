import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router'; // Importation du Router
import { FormsModule } from '@angular/forms'; // Nécessaire pour [(ngModel)]

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  standalone: true,  // Déclaration du composant comme autonome
  imports: [FormsModule],  // Ajouter FormsModule ici pour ngModel
})
export class UserCreateComponent {
  user: User = { id: 0, name: '', email: '' };

  constructor(private userService: UserService, private router: Router) {}

  addUser(): void {
    this.user.id = Math.floor(Math.random() * 1000); // Assurez-vous que l'ID est unique
    this.userService.addUser(this.user);
    this.router.navigate(['/']);  // Rediriger vers la liste des utilisateurs après l'ajout
    this.resetForm();  // Réinitialiser le formulaire
  }

  resetForm(): void {
    this.user = { id: 0, name: '', email: '' };  // Réinitialiser le formulaire
  }
}
