import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { DizimoService } from '../dizimo.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { HistoricoService } from '../../historico/historico.service';
import { SegurancaService } from '../../seguranca/seguranca.service';
import { CaixaService } from '../../caixa/caixa.service';
import { Dizimo } from '../dizimo';
import { log } from 'util';

@Component({
  selector: 'app-dizimo-pesquisa',
  templateUrl: './dizimo-pesquisa.component.html',
  styleUrls: ['./dizimo-pesquisa.component.css']
})
export class DizimoPesquisaComponent implements OnInit {

  dizimos = [];
  dizimo: any;
  @ViewChild('tabela') tabela;
  display = false;

  codigoCaixa: number;
  codigoDizimo: number;
  valorDizimo: number;
  valorAlterado: number;
  statusCaixa: boolean;


  constructor(private dizimoService: DizimoService, private titleService: Title, private messageService: MessageService,
    private confirmationService: ConfirmationService, private historicoService: HistoricoService, private segurancaService: SegurancaService,
    private caixaService: CaixaService) {}

  ngOnInit() {
    this.titleService.setTitle('Pesquisa do Dizimo');
    this.listarTodos();
  }

  listarTodos() {
    this.dizimoService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => this.dizimos = response);
  }

  excluir(dizimo: any) {
    this.dizimo = dizimo;
    if (!dizimo.caixa.status) {
      this.messageService.add({severity: 'error', detail: 'Caixa do deposito encontra-se fechado', summary: ''});
      return;
    }

    this.confirmationService.confirm({
      message: 'Deseja excluir o dizimo selecionado?',
      accept: () => {
        this.dizimoService.excluir(dizimo.codigo).subscribe(() => {
          this.messageService.add({severity: 'success', detail: 'Excluido com sucesso', summary: 'Excluido com sucesso'});
          this.historicoService.salvar('Excluiu um dizimo ', this.segurancaService.nomeUsuario);
          this.caixaService.atualizarSaldoExclusao(this.dizimo.caixa.codigo, this.dizimo.valor).subscribe();
          this.tabela.first = 0;
          this.listarTodos();
        });
      }
    });
  }

  buscarDizimo(dizimo: any) {
    this.codigoCaixa = dizimo.caixa.codigo;
    this.valorDizimo = dizimo.valor;
    this.statusCaixa = dizimo.caixa.status;
    this.codigoDizimo = dizimo.codigo;
  }

  showDialog() {
    this.valorAlterado = 0;
    this.display = true;
  }

  voltar() {
    this.display = false;
  }

  alterarDizimo() {
    if (!this.statusCaixa) {
      this.messageService.add({severity: 'error', detail: 'Caixa do deposito encontra-se fechado', summary: ''});
      return ;
    }
    if (this.valorAlterado <= 0) {
      this.messageService.add({severity: 'error', detail: 'Não é possivel passar um valor 0', summary: ''});
      return ;
    }

    this.dizimoService.atualizarSaldoDizimo(this.codigoDizimo, this.valorAlterado).subscribe(response => {
      // this.historicoService.salvar('Alterou um dizimo valor atual R$ ' + response.valor, this.segurancaService.nomeUsuario).subscribe();
      this.listarTodos();
      this.messageService.add({severity: 'success', detail: 'Alterado com sucesso', summary: 'Alterado com sucesso'});

      let opcao = this.valorDizimo > this.valorAlterado ? true : false;
      let valorProporcional: number;
      if (opcao) {
        valorProporcional = this.valorDizimo - this.valorAlterado;
      } else {
        valorProporcional = this.valorDizimo - this.valorAlterado;
      }

      console.log(valorProporcional);
      this.caixaService.atualizarSaldoPropocional(this.codigoCaixa, valorProporcional).subscribe();
      this.display = false;
    });
  }

}
