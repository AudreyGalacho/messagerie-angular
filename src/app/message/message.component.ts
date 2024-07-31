import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  /* signifie qu'il peut etre renseigné pas un composant parant*/
  @Input() auteur: string ="";
  @Input() text: string ="";

}
