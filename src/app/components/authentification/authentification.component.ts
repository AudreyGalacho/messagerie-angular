import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {UsersService} from "../../services/users.service";

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
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UsersService) {
  }//injection de Router pour la navigation

  login() {
    console.log('Tentative de connexion avec', this.username, this.password);
    if (this.userService.findUser(this.username, this.password)) {
      this.userService.userLogged={pseudo: this.username, password: this.password, isLogged: true};

      this.router.navigate(['/feed-messages'])
        .then(r => console.log('user logged in'));
    }
  }

  async navigateToRegister() {
    await this.router.navigate(['/register']);
  }

  async navigateToFlux() {
    await this.router.navigate(['/feed-messages']);
  }
}

