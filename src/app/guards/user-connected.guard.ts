import { CanActivateFn } from '@angular/router';

export const userConnectedGuard: CanActivateFn = () => {
  return sessionStorage.getItem('user') !== null;
};
