import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';

  constructor(
    public loginService: LoginService,
    public router : Router
    ) {}

  login(): void {
    if (this.loginService.login(this.usuario, this.senha)) {
      this.router.navigate(['personagens'])
    } else {
      console.log('usuario nao existe')
    }
  }
}
