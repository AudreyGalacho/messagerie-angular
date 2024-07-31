import {Component, Input} from '@angular/core';
import {MessageComponent} from "../message/message.component";

@Component({
  selector: 'app-list-messages',
  standalone: true,
  imports: [
    MessageComponent
  ],
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css'
})
export class ListMessagesComponent {
  listMessages: MessageComponent[] =[];

  sendMessage(auteur: string, text: string) {
    let message = new MessageComponent();
    message.text = text;
    message.auteur = auteur;
    this.listMessages.push(message);
    console.log('Sending message...');
    console.log(message);
  }
}
