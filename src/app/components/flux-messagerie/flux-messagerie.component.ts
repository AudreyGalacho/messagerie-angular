import { Component } from '@angular/core';
import {ListMessagesComponent} from "../parts/list-messages/list-messages.component";
import {TextInputZoneComponent} from "../parts/text-input-zone/text-input-zone.component";
import {UsersComponent} from "../parts/users/users.component";

@Component({
  selector: 'app-flux-messagerie',
  standalone: true,
  imports: [
    ListMessagesComponent,
    TextInputZoneComponent,
    UsersComponent
  ],
  templateUrl: './flux-messagerie.component.html',
  styleUrl: './flux-messagerie.component.css'
})
export class FluxMessagerieComponent {

}
