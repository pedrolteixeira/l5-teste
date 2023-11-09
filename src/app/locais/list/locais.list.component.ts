import { Component } from '@angular/core';
import { LocaisService } from '../locais.service';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Local } from '../models/Local.model';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.list.component.html',
  styleUrls: ['./locais.list.component.css']
})
export class LocaisListComponent {
  constructor(
    public locaisService : LocaisService,
    public router : Router,
    public dashboardService : DashboardService
  ) {}

  ngOnInit() {
    if (this.dashboardService.filtro) {
      this.locaisService.filterLocais();
    }
    this.locaisService.getLocais();
  }
  
  onScroll() {
    this.locaisService.paginaAtual++;
    this.locaisService.getLocais();
  }
}
