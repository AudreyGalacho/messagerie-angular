import {Injectable} from '@angular/core';
import {Message} from "../interfaces/message";

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  messages: Message[] = [];

  constructor() {
  }
  addMessage(message: Message) {
    this.messages.push(message);
  }
}
