import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms'; // Nécessaire pour [(ngModel)]

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  imports: [FormsModule],
})
export class UserEditComponent implements OnInit {
  user: User = { id: 0, name: '', email: '' };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);  // Vérifiez l'ID récupéré
    if (id) {
      this.userService.getUser(id).subscribe((data) => {
        console.log(data);  // Vérifiez la donnée récupérée
        this.user = data;
      });
    }
  }

  async updateUser (): Promise<void> {
    await this.userService.updateUser  (this.user.id, this.user).toPromise();
    console.log('Mise à jour réussie');
    this.router.navigateByUrl('/');
  }

}
