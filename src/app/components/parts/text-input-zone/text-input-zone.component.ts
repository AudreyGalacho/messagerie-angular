import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MessagesService} from "../../../services/messages.service";
import {Message} from "../../../interfaces/message";
import {RouterLink} from "@angular/router";
import {UsersService} from "../../../services/users.service";
import {NgIf} from "@angular/common";
import {User} from "../../../interfaces/user";

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
  author: string = "";
  content: string = "";

  constructor(private service: MessagesService, protected serviceUser: UsersService) {
  }

  sendMessage() {
    let userJson = sessionStorage.getItem("user") ||"";
    let user :User = JSON.parse(userJson);
    console.log(user);
    if (!user.pseudo) {
      console.error('User not found');
      return;
    }
    const newMessage: Message = {
      author: user.pseudo,
      content: this.content,
      date: new Date()
    };
    this.service.addMessage(newMessage);
    this.content = "";
  }

  protected readonly sessionStorage = sessionStorage;
}
