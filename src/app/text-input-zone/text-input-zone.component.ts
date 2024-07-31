import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MessagesService} from "../services/messages.service";
import {Message} from "../interfaces/message";

@Component({
  selector: 'app-text-input-zone',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './text-input-zone.component.html',
  styleUrl: './text-input-zone.component.css'
})
export class TextInputZoneComponent {
  auteur: string = "";
  text: string = "";

  constructor(private service: MessagesService) {
  }

  sendMessage() {
    if (!this.auteur) {
      console.error('User not found');
      return;
    }
    const newMessage: Message = {
      auteur: this.auteur,
      text: this.text,
      date: new Date()
    };
    this.service.addMessage(newMessage);
    this.text = "";
  }
}
