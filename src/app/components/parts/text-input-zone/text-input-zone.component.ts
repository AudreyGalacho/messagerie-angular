import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MessagesService} from "../../../services/messages.service";
import {Message} from "../../../interfaces/message";
import {RouterLink} from "@angular/router";
import {UsersService} from "../../../services/users.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-text-input-zone',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './text-input-zone.component.html',
  styleUrl: './text-input-zone.component.css'
})
export class TextInputZoneComponent {
  auteur: string = "";
  text: string = "";

  constructor(private service: MessagesService, protected serviceUser: UsersService) {
  }

  sendMessage() {
    // console.log(this.serviceUser.users);
    if (!this.serviceUser.userLogged?.pseudo) {
      console.error('User not found');
      return;
    }
    const newMessage: Message = {
      auteur: this.serviceUser.userLogged?.pseudo,
      text: this.text,
      date: new Date()
    };
    this.service.addMessage(newMessage);
    this.text = "";
  }
}
