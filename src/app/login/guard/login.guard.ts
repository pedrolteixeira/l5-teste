import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { LoginService } from "../services/login.service";


export const loginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  let usuarioLogado: boolean;

    if (loginService.isAuthenticated) {
        usuarioLogado = true;
    } else {
        usuarioLogado = false;
    }
    return usuarioLogado;
}