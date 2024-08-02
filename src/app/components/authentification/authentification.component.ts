import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent {
  pseudo: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UsersService) {
  }//injection de Router pour la navigation

  async login() {
    console.log('Tentative de connexion avec', this.pseudo, this.password);
    let user: User = {pseudo: this.pseudo, password: this.password, isLogged:true};
    try {
      let response = await this.userService.findUser(user) || {};
      console.log(response);
      if (response) {
        let userLoged: User = {pseudo: this.pseudo, password: this.password, isLogged: true};
        sessionStorage.setItem("userLogged", JSON.stringify(user));
        //console.log(sessionStorage.getItem("userLogged"));
        this.router.navigate(['/feed-messages'])
          .then(r => console.log('user logged in', r));
      } else {
        console.log('Connexion échouée');
      }
    } catch (error) {
      console.error('Erreur lors de la tentative de connexion', error);
    }
  }

  async navigateToRegister() {
    await this.router.navigate(['/register']);
  }

  async navigateToFlux() {
    await this.router.navigate(['/feed-messages']);
  }
}

