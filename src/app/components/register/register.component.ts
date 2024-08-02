import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        FormsModule,
        RouterLink
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  pseudo: string ="";
  password: string ="";
  confirmPassword: string = '';

  constructor(private router: Router, private serviceUser: UsersService) {
  }
  async register() {
    if (this.password !== this.confirmPassword) {
      console.error('Les mots de passe ne correspondent pas');
      return;
    }
    //creation user
    const newUser: User = {pseudo: this.pseudo, password: this.password, isLogged: false};
    console.log('Tentative d\'enregistrement avec', newUser);
    await this.serviceUser.addNewUser(newUser).then(r => console.log(r));

  }
  async goToLogin() {
    await this.router.navigate(['/login']);
    console.log('Arrivé sur login');
  }


}
