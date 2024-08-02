import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {User} from "../../../interfaces/user";
import {RouterLink} from "@angular/router";
import {UsersService} from "../../../services/users.service";


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  usersApi: User[] =[];

  constructor(protected usersService: UsersService) {
  }
  async ngOnInit() {
    try {
      this.usersApi = await this.usersService.fetchUsers();
      console.log(this.usersApi);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  }
}
