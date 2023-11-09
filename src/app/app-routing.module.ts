import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/index/dashboard.component';
import { PersonagensListComponent } from './personagens/list/personagens.listcomponent';
import { PersonagensShowComponent } from './personagens/show/personagens.show.component';
import { LocaisListComponent } from './locais/list/locais.list.component';
import { EpisodiosListComponent } from './episodios/list/episodios.list.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './login/guard/login.guard';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [loginGuard],
    children: [
      { path: 'personagens', component: PersonagensListComponent },
      { path: 'personagens-show', component: PersonagensShowComponent },
      { path: 'locais', component: LocaisListComponent },
      { path: 'episodios', component: EpisodiosListComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
