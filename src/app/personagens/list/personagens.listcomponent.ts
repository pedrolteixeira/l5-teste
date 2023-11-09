import { Component } from '@angular/core';
import { PersonagensService } from '../personagens.service';
import { Personagem } from '../models/personagem.model';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/dashboard/dashboard.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.list.component.html',
  styleUrls: ['./personagens.list.component.css']
})
export class PersonagensListComponent {
  constructor(
    public personagensService : PersonagensService,
    public router : Router,
    public dashboardService : DashboardService
  ) {}

  ngOnInit() {
    if (this.dashboardService.filtro) {
      this.personagensService.filterPersonagens();
    }
    this.personagensService.getPersonagens();
  }
  
  onScroll() {
    this.personagensService.paginaAtual++;
    this.personagensService.getPersonagens();
  }

  verDetalhesPersonagem(personagem: Personagem) {
    this.personagensService.personagemSelecionado = personagem;
    this.router.navigate(['personagens-show']);
  }
}
