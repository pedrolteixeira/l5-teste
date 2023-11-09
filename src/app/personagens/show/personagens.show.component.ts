import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personagem } from 'src/app/personagens/models/personagem.model';
import { PersonagensService } from 'src/app/personagens/personagens.service';

@Component({
  selector: 'app-personagens.show',
  templateUrl: './personagens.show.component.html',
  styleUrls: ['./personagens.show.component.css']
})
export class PersonagensShowComponent {
  public personagem: Personagem = new Personagem;

  constructor(
    public personagensService : PersonagensService,
    public router : Router
  ) {}

  ngOnInit() {
    this.verificaPersonagem();
  }

  verificaPersonagem() {
    if (Object.keys(this.personagensService.personagemSelecionado).length > 0) {
      this.personagem = this.personagensService.personagemSelecionado;
    } else {
      this.router.navigate(['personagens']);
    }
  }
}
