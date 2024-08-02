import {Component, } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {UsersService} from "../../services/users.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  appName: string = 'Messagerie';
  logoApp: string ="/assets/logo.png";


  constructor(public serviceUser: UsersService) {
  }

  logout() {
    this.serviceUser.logout()
    console.log('Arrivé sur le feed');
  }

}
