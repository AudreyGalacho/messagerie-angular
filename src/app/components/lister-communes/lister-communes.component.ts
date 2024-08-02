import {Component} from '@angular/core';
import {CommunesService} from "../../services/communes.service";
import {Commune} from "../../interfaces/commune";
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-lister-communes',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './lister-communes.component.html',
  styleUrl: './lister-communes.component.css'
})
export class ListerCommunesComponent {
  communes: Commune[]= [];
  constructor(private communesService: CommunesService) {
  }

  async ngOnInit() {
    try {
      this.communes = await this.communesService.fetchCommunes();
      console.log(this.communes);
    } catch (error) {
      console.error('Error fetching communes', error);
    }
  }
  // ngOnInit() {
  //   try {
  //     this.communes = this.communesService.fetchCommunes();
  //   } catch (error) {
  //     console.error('Error fetching communes', error);
  //   }
  // }
}