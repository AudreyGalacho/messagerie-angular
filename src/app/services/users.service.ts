import {Injectable} from '@angular/core';
import {User} from "../interfaces/user";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userLogged?: User;
  private apiUrl = "http://localhost";

  constructor(private router: Router, private client: HttpClient) {
  }

  async fetchUsers(): Promise<User[]> {
    return await this.client.get<User[]>(`${this.apiUrl}/users`).toPromise() || [];
  }

  async findUser(user: User) {
    return new Promise((resolve, reject) => {
      let body = {
        "pseudo": user.pseudo,
        "password": user.password
      };
      const header: HttpHeaders = new HttpHeaders({
            "Content-Type": "application/json"
          });
      this.client.post(`${this.apiUrl}/check-user`, body, {headers:header}).subscribe(
        (response) => {
          resolve(true);
        },
        (error) => {
          resolve(false);
        }
      );
    });
  }

  async addNewUser(user: User) {
    const headers = new Headers({
        "Content-Type": "application/json"
      }
    );
    console.log(user);
    if (user.password != null) {
      try {
        let userExist = await this.findUser(user);
        this.userLogged = <User> userExist;
        console.log(userExist);
        if (!userExist) {
          console.log("New user!");

          return new Promise((resolve, reject) => {
            let body = {
              "pseudo": user.pseudo,
              "password": user.password
            };
            this.client.post(`${this.apiUrl}/user`, body).subscribe(
              (response) => {
                resolve(true);
              },
              (error) => {
                console.log("erreur");
                reject(false);
              }
            );
          });
        }
      } catch (erreur) {
        console.log(erreur);
      }
    }
    return;
  }

  logout() {
    //recup de l'user log
    if (this.userLogged) {
      this.userLogged.isLogged = false;
    }
    this.redirectToAuthentification().then(r => console.log("logout"));
  }

  /********************* NAVIGATION **************************/
  async redirectToAuthentification() {
    await this.router.navigate(['/authentification']);
  }

  async goToFeed() {
    await this.router.navigate(['/feed-messages']);
    console.log('Arrivé sur le feed');
  }

}
