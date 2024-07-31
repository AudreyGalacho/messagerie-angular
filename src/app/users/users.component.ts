import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {MessagesService} from "../services/messages.service";
import {User} from "../interfaces/user";


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[];
  // users;

  constructor(private service: MessagesService) {
    this.users = this.service.users;
  }
}
