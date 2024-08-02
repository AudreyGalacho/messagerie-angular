import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Message} from "../../../interfaces/message";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})


export class MessageComponent {
  @Input() message !: Message;
}
