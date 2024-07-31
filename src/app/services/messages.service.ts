import {Injectable} from '@angular/core';
import {Message} from "../interfaces/message";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
// messages : {author : string, content : string, date : Date}[] = [];
// users: string[] = [];
export class MessagesService {
  messages: Message[] = [];
  users: User[] = [];
   constructor() {
  }

  addMessage(message: Message) {
    this.messages.push(message);
    if (!this.users.find(user => user.pseudo === message.auteur)) {
      this.addUser({ pseudo: message.auteur });
    }
    console.log(message);
    console.log(this.messages);
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
