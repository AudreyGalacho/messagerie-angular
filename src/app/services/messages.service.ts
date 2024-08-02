import {Injectable} from '@angular/core';
import {Message} from "../interfaces/message";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  private apiUrl = "http://localhost";

  constructor(private client: HttpClient) {
  }

  async fetchMessages(): Promise<Message[]> {
    return await this.client.get<Message[]>(`${this.apiUrl}/messages`).toPromise() || [];
  }



  async addMessage(message: Message) {
    const header: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return await this.client.post(
      `${this.apiUrl}/messages`, message, {headers: header}).toPromise()
  }
}
