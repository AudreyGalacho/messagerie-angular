import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UsersService} from "../services/users.service";

export const userDisconnectedGuard: CanActivateFn = (route, state) => {
  let userS = inject(UsersService);
  if(!userS.userLogged){
    return true
  }
  let router = inject(Router);
  router.navigate(['/feed-messages']);
  return false;
};
