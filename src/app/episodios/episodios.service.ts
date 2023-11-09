import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Episodio } from './models/Episodio.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  public episodios: Array<Episodio> = [];
  public episodioSelecionado : any = {};
  public paginaAtual: number = 1;

  constructor(
    public http: HttpClient,
    public dashboardService: DashboardService
  ) { }

  filterEpisodios() {
    this.paginaAtual = 1;
    this.episodios = [];
    this.getEpisodios();
  }

  getEpisodios () {
    let urlDaApi = `https://rickandmortyapi.com/api/episode/?page=${this.paginaAtual}`;

    if (this.dashboardService.filtro) {
      urlDaApi += `&name=${this.dashboardService.filtro}`
    }
  
    return this.http.get(urlDaApi).subscribe((resp: any) => {
      this.episodios = this.episodios.concat(resp.results);
    });
  }
}
