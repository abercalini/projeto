import { CaixaService } from './../../caixa/caixa.service';
import { HistoricoService } from './../../historico/historico.service';
import { SegurancaService } from './../../seguranca/seguranca.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { EntradaService } from '../entrada.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';


import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Entrada } from '../entrada';

@Component({
  selector: 'app-entrada-pesquisa',
  templateUrl: './entrada-pesquisa.component.html',
  styleUrls: ['./entrada-pesquisa.component.css']
})
export class EntradaPesquisaComponent implements OnInit {

  entradas = [];
  codigo: number;
  codigoCaixa: number;
  valorTotal: number;
  @ViewChild('tabela') tabela;

  constructor(private entradaService: EntradaService, private router: Router, private confirmationService: ConfirmationService,
      private segurancaService: SegurancaService, private historicoService: HistoricoService, private messageService: MessageService,
      private titleService: Title, private caixaService: CaixaService
      ) { }

  ngOnInit() {
    this.titleService.setTitle('Pesquisa de Entrada');
    this.listarTodos();
  }


  listarTodos() {
    this.entradaService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => {
        this.entradas = response;
    });
  }

  pegarDados(entradaAux: Entrada) {
    this.codigo = entradaAux.codigo;
    this.valorTotal = entradaAux.valorTotal;
    this.codigoCaixa = entradaAux.caixa.codigo;
  }

  visualizar() {
    this.router.navigate(['/entrada/' + this.codigo]);
  }

  prepararExclusao() {
    this.confirmationService.confirm({
      message: 'Deseja Excluir ?',
      accept: () => {
          this.excluir();
      }
    });
  }

  excluir() {
    this.entradaService.excluir(this.codigo).subscribe(() => {
        this.messageService.add({severity: 'success', detail: 'Excluido com sucesso', summary: 'Excluido com sucesso'});
        this.caixaService.atualizarSaldoExclusao(this.codigoCaixa, this.valorTotal).subscribe();
        this.historicoService.salvar('Excluiu uma entrada', this.segurancaService.nomeUsuario).subscribe();
        this.tabela.first = 0;
        this.listarTodos();
    });
  }

}
