import { HistoricoService } from './../../historico/historico.service';
import { SegurancaService } from 'src/app/seguranca/seguranca.service';
import { VisitanteFilter } from './../visitanteFIlter';
import { VisitanteService } from './../visitante.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-visitante-pesquisa',
  templateUrl: './visitante-pesquisa.component.html',
  styleUrls: ['./visitante-pesquisa.component.css']
})
export class VisitantePesquisaComponent implements OnInit {


  visitantes = [];
  visitanteFilter = new VisitanteFilter();
  @ViewChild('tabela') tabela;

  constructor(
    private visitanteService: VisitanteService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private segurancaService: SegurancaService,
    private historicoService: HistoricoService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.pesquisar();
    this.titleService.setTitle('Pesquisas de visitantes');
  }

  pesquisar() {
    const codigo = localStorage.getItem('codigo_igreja');
    this.visitanteService.listarTodos(codigo, this.visitanteFilter).subscribe(response => this.visitantes = response);
  }


  excluir(codigo: number) {
    this.confirmationService.confirm({
      message: 'Deseja excluir o visitante?',
      accept: () => {
        this.visitanteService.excluir(codigo).subscribe(() => {
          this.adicionarMensagem('success', 'Excluido com sucesso', 'Excluido com sucesso');
          this.tabela.first = 0;
          this.pesquisar();
          this.historicoService.salvar('Excluiu um visitante ', this.segurancaService.nomeUsuario).subscribe();
        });
      }
    });
  }

  adicionarMensagem(severity: string, detail: string, summary: string) {
    this.messageService.add({severity: severity, detail: detail, summary: summary});
  }

}
