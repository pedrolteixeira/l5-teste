import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isAuthenticated: boolean = false;

  constructor(
    public router : Router
  ){}

  login(usuario: string, senha: string): boolean {
    if (usuario === 'admin' && senha === 'admin') {
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.router.navigate(['login']);
    this.isAuthenticated = false;
  }
}
