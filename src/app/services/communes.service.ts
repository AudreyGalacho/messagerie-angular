import { Injectable } from '@angular/core';
import {Commune} from "../interfaces/commune";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommunesService {

  private apiUrl = "https://geo.api.gouv.fr/communes?limit=20";

  constructor(private client: HttpClient) {}

  async fetchCommunes(): Promise<Commune[]> {
     return this.client.get<Commune[]>(this.apiUrl).toPromise() as Promise<Commune[]>;
  }

  // constructor(private client: HttpClient) {}
  //
  // fetchCommunes(): Observable<Commune[]> {
  //   return this.client.get<Commune[]>(this.apiUrl);
  // }

}
