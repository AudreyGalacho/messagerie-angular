import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {TextInputZoneComponent} from "./components/parts/text-input-zone/text-input-zone.component";
import {ListMessagesComponent} from "./components/parts/list-messages/list-messages.component";
import {MessageComponent} from "./components/parts/message/message.component";
import {UsersComponent} from "./components/parts/users/users.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TextInputZoneComponent,
    ListMessagesComponent,
    MessageComponent,
    UsersComponent, FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Messagerie';
  listMessages: MessageComponent[] = [];
}
