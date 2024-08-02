import {Routes} from '@angular/router';
import {UsersComponent} from "./components/parts/users/users.component";
import {ListMessagesComponent} from "./components/parts/list-messages/list-messages.component";
import {AuthentificationComponent} from "./components/authentification/authentification.component";
import {RegisterComponent} from "./components/register/register.component";
import {FluxMessagerieComponent} from "./components/flux-messagerie/flux-messagerie.component";
import {userDisconnectedGuard} from "./guards/user-disconnected.guard";
import {ListerCommunesComponent} from "./components/lister-communes/lister-communes.component";

export const routes: Routes = [
  {path: "communes", component: ListerCommunesComponent},
  {path: "login", component: AuthentificationComponent, canActivate: [userDisconnectedGuard]},
  {path: "register", component: RegisterComponent},
  {path: "feed-messages", component: FluxMessagerieComponent},

  {path: "lister-users", component: UsersComponent},
  {path: "lister-messages", component: ListMessagesComponent},
  {path: "**", component: AuthentificationComponent},//default route last
];
