import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServices} from '../services/auth.services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServices,
              private router: Router) {

  }


  canActivate(): boolean {

    if (this.authService.estaAutenticado()){
      return true;
    }else{
      this.router.navigateByUrl('/login')
      return false;
    }
  }

}
