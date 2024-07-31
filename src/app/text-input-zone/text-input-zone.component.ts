import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ListMessagesComponent} from "../list-messages/list-messages.component";
import {MessageComponent} from "../message/message.component";

@Component({
  selector: 'app-text-input-zone',
  standalone: true,
  imports: [
    FormsModule,
    ListMessagesComponent
  ],
  templateUrl: './text-input-zone.component.html',
  styleUrl: './text-input-zone.component.css'
})
export class TextInputZoneComponent {
  author: string = "";
  text: string = "";

}
