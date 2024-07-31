import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {TextInputZoneComponent} from "./text-input-zone/text-input-zone.component";
import {FooterComponent} from "./footer/footer.component";
import {ListMessagesComponent} from "./list-messages/list-messages.component";
import {MessageComponent} from "./message/message.component";
import {UsersComponent} from "./users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TextInputZoneComponent,
    FooterComponent,
    ListMessagesComponent,
    MessageComponent,
    UsersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Messagerie';
  listMessages: MessageComponent[] = [];
}
