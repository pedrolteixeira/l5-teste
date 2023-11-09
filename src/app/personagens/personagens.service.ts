import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from '../dashboard/dashboard.service';
import { Personagem } from './models/personagem.model';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  public personagens: Array<Personagem> = [];
  public personagemSelecionado : any = {};
  public paginaAtual: number = 1;


  constructor(
    public http: HttpClient,
    public dashboardService: DashboardService
  ) { }

  filterPersonagens() {
    this.paginaAtual = 1;
    this.personagens = [];
    this.getPersonagens();
  }

  getPersonagens() {
    let urlDaApi = `https://rickandmortyapi.com/api/character/?page=${this.paginaAtual}`;

    if (this.dashboardService.filtro) {
      urlDaApi += `&name=${this.dashboardService.filtro}`
    }
  
    return this.http.get(urlDaApi).subscribe((resp: any) => {
      this.personagens = this.personagens.concat(resp.results);
    });
  }
}
