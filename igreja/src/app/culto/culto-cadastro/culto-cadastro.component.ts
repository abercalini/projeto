import { Title } from '@angular/platform-browser';
import { HistoricoService } from './../../historico/historico.service';
import { SegurancaService } from './../../seguranca/seguranca.service';
import { CultoService } from './../culto.service';
import { Culto } from './../culto';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-culto-cadastro',
  templateUrl: './culto-cadastro.component.html',
  styleUrls: ['./culto-cadastro.component.css']
})
export class CultoCadastroComponent implements OnInit {

  culto = new Culto();

  constructor(private cultoService: CultoService, private segurancaService: SegurancaService,
      private historicoService: HistoricoService, private messageService: MessageService,
      private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Cadastro do culto');
  }

  salvar(form: NgForm) {
    this.culto.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.cultoService.salvar(this.culto).subscribe(response => {
      this.adicionarMensagem('success', 'Adicionado com sucesso', 'Adicionando com sucesso');
      this.historicoService.salvar('Cadastrou um culto ' + response.descricao, this.segurancaService.nomeUsuario).subscribe();
      form.reset();
      this.culto = new Culto();
    });
  }

  adicionarMensagem(severity: string, detail: string, summary: string) {
    this.messageService.add({severity: severity, detail: detail, summary: summary});
  }

}
