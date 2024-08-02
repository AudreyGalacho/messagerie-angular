import {Injectable} from '@angular/core';
import {User} from "../interfaces/user";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userLogged?: User;
  private apiUrl = "http://localhost";


  constructor(private router: Router, private client: HttpClient) {
    // this.users = this.fetchUsers()
  }

  async fetchUsers(): Promise<User[]> {
    return this.client.get<User[]>(
      `${this.apiUrl}/users`
    ).toPromise() as Promise<User[]>;
    // console.log('Fetching users');
    // // this.users = this.client.get<User[]>(this.apiUrl)
    // this.client.get<User[]>(this.apiUrl).subscribe(resUsers =>{
    //   this.users = resUsers as User[]

    // });
    // return this.users;
  }

  // findUser(pseudo: string, password: string){
  //   let response: boolean;
  //   let body = {
  //     "pseudo": pseudo,
  //     "password": password
  //   }
  //   this.client.post<User>(`${this.apiUrl}/check-user`, body).subscribe(
  //     (response)=>   {
  //       console.log("c'est bon");
  //     },
  //     (error) => {
  //       console.log("c'est bon");
  //     }
  //   )
  // }
  findUser(user : User) {
    return new Promise((resolve, reject) => {
      let body = {
        "pseudo": user.pseudo,
        "password": user.password
      };
      this.client.post(`${this.apiUrl}/check-user`, body).subscribe(
        (response) => {
          resolve(true);
        },
        (error) => {
          console.log("erreur");
          return false
          // reject(false);
        }
      );
    });
  }

  async addNewUser(user: User) {
    console.log(user);
    if (user.password != null) {
      try {
        let userList:User[] = await this.fetchUsers()
        console.log(userList.includes(user));
        if (userList.includes(user)) {
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
      } catch (erreur){
        console.log(erreur);
      }
    }
    return ;
  }

    //   if(this.users.includes(user)){
    //     console.log("user exist");
    //     return;
    //   }
    //   if(!this.users.includes(user)){
    //     user.isLogged = true;
    //     this.users.push(user);
    //     this.userLogged = user;
    //     console.log(this.users);
    //     this.goToFeed();
    //   }


  logout() {
    //recup de l'user log
    if (this.userLogged) {
      this.userLogged.isLogged = false;
    }
    this.redirectToAuthentification().then(r => console.log("logout"));
  }

  // findUser(pseudo: string, password: string) {
  //   return  this.users.find(user => user.pseudo === pseudo && user.password === password);
  // }

  /********************* NAVIGATION **************************/
  async redirectToAuthentification() {
    await this.router.navigate(['/authentification']);
  }

  async goToFeed() {
    await this.router.navigate(['/feed-messages']);
    console.log('Arrivé sur le feed');
  }

}
