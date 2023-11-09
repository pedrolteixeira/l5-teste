import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { PersonagensService } from '../../personagens/personagens.service';
import { LocaisService } from 'src/app/locais/locais.service';
import { EpisodiosService } from 'src/app/episodios/episodios.service';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(
    public router : Router,
    public dashboardService : DashboardService,
    public personagensService: PersonagensService,
    public locaisService : LocaisService,
    public episodiosService : EpisodiosService,
    public loginService : LoginService
  ){}
  
  visualizarFiltro(): boolean {
    let rotaAtual = this.router.url;
    return rotaAtual === '/personagens' || rotaAtual === '/locais' || rotaAtual === '/episodios';
  }

  filtrar(): void {
    this.personagensService.filterPersonagens(); 
    this.locaisService.filterLocais(); 
    this.episodiosService.filterEpisodios();
  }
}
