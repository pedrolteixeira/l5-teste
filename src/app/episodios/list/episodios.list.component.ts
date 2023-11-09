import { Component } from '@angular/core';
import { EpisodiosService } from '../episodios.service';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/dashboard/dashboard.service';

@Component({
  selector: 'app-episodios.list',
  templateUrl: './episodios.list.component.html',
  styleUrls: ['./episodios.list.component.css']
})
export class EpisodiosListComponent {
  constructor(
    public episodiosService : EpisodiosService,
    public router : Router,
    public dashboardService : DashboardService
  ) {}

  ngOnInit() {
    if (this.dashboardService.filtro) {
      this.episodiosService.filterEpisodios();
    }
    this.episodiosService.getEpisodios();
  }
  
  onScroll() {
    this.episodiosService.paginaAtual++;
    this.episodiosService.getEpisodios();
  }
}
