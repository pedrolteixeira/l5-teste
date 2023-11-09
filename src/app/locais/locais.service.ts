import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Local } from './models/Local.model';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {

  public locais: Array<Local> = [];
  public localSelecionado : any = {};
  public paginaAtual: number = 1;

  constructor(
    public http: HttpClient,
    public dashboardService: DashboardService
  ) { }

  filterLocais() {
    this.paginaAtual = 1;
    this.locais = [];
    this.getLocais();
  }

  getLocais() {
    let urlDaApi = `https://rickandmortyapi.com/api/location/?page=${this.paginaAtual}`;

    if (this.dashboardService.filtro) {
      urlDaApi += `&name=${this.dashboardService.filtro}`
    }
  
    return this.http.get(urlDaApi).subscribe((resp: any) => {
      this.locais = this.locais.concat(resp.results);
    });
  }
}
