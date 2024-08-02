import {Component, OnInit} from '@angular/core';
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
export class UsersComponent implements OnInit{
  usersApi: User[] =[];

  constructor(protected usersService: UsersService) {
  }
  async ngOnInit() {
    try {
      this.usersApi = await this.usersService.fetchUsers();
      console.log(this.usersApi);
      setInterval(async ()=>{
        this.usersApi = await this.usersService.fetchUsers();
      },5000)
    } catch (error) {
      console.error('Error fetching users', error);
    }
  }
}
