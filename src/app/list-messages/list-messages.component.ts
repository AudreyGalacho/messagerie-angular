import {Component} from '@angular/core';
import {MessageComponent} from "../message/message.component";
import {NgForOf, NgIf} from "@angular/common";
import {MessagesService} from "../services/messages.service";
import {Message} from "../interfaces/message";


@Component({
  selector: 'app-list-messages',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    MessageComponent
  ],
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css'
})
export class ListMessagesComponent {
  // listMessages : {author: string, content: string, date: Date}[] = [];
  listMessages: Message [] = [];

  constructor(private service: MessagesService) {
    this.listMessages = this.service.messages;
  }
}
