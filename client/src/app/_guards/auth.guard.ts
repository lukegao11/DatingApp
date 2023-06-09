import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService); // Create an instance of AccountService
  const toastrService = inject(ToastrService);

  return accountService.currentUser$.pipe(
    map(currentUser => {
      if (currentUser) {
        return true;
      } else {
        toastrService.error("Access Denied!");
        return false;
      }
    })
  );
};