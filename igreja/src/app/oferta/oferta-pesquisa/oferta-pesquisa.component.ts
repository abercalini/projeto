import { Component, OnInit } from '@angular/core';

import { OfertaService } from '../oferta.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { CaixaService } from '../../caixa/caixa.service';
import { HistoricoService } from '../../historico/historico.service';
import { SegurancaService } from '../../seguranca/seguranca.service';


@Component({
  selector: 'app-oferta-pesquisa',
  templateUrl: './oferta-pesquisa.component.html',
  styleUrls: ['./oferta-pesquisa.component.css']
})
export class OfertaPesquisaComponent implements OnInit {

  ofertas = [];
  display = false;
  oferta: any;
  valorOfertaAtual: number;
  valor: number;

  constructor(private ofertaService: OfertaService, private messageService: MessageService,
    private confirmationService: ConfirmationService, private caixaService: CaixaService,
    private historicoService: HistoricoService, private segurancaService: SegurancaService,
) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.ofertaService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => this.ofertas = response);
  }

  prepararExclusao(codigo: number) {
    let valor: number;
    this.ofertaService.buscarPorCodigo(codigo).subscribe(response => {
      valor = response.valor;
      if (!response.caixa.status) {
        this.messageService.add({severity: 'error', summary: 'Banco dessa oferta encontra-se fechado'});
        return ;
      }

      this.confirmationService.confirm({
        message: 'Deseja exluir a oferta?',
        accept: () => {
          this.ofertaService.excluir(codigo).subscribe(() => {
            this.messageService.add({severity: 'success', summary: 'Excluido com sucesso', detail: 'Excluido com sucesso'});
            this.historicoService.salvar('Excluiu uma oferta na valor de R$ ' + valor, this.segurancaService.nomeUsuario).subscribe();
            this.caixaService.atualizarSaldoExclusao(response.caixa.codigo, valor).subscribe();
            this.pesquisar();
          });
        }
      });
    });
  }

  showDialog() {
    this.valor = 0;
    this.display = true;
  }

  voltar() {
    this.display = false;
  }

  alterar(oferta: any) {
    this.oferta = oferta;
    this.valorOfertaAtual = oferta.valor;
  }

  alterarValor() {
    if (!this.oferta.caixa.status) {
      this.messageService.add({severity: 'error', detail: 'Caixa da oferta encontra-se fechado', summary: ''});
      return;
    }
    if (this.valor === 0 || this.valor < 0) {
      this.messageService.add({severity: 'error', detail: 'Valor não pode ser 0.00', summary: ''});
      return;
    }
    this.ofertaService.atualizarSaldoProporcional(this.oferta.codigo, this.valor).subscribe(response => {
      console.log(response);
      this.historicoService.salvar('Alterou uma oferta no valor de R$ ' + response.valor, this.segurancaService.nomeUsuario).subscribe();
      this.messageService.add({severity: 'success', detail: 'Alterado com sucesso', summary: 'Alterado com sucesso'});
      this.valor = 0;
      this.display = false;
      this.pesquisar();

      let verificacao = this.oferta.valor > response.valor ? true : false;
      let valorProporcional: number;

      if (verificacao) {
         valorProporcional = this.oferta.valor - response.valor;
      } else {
        valorProporcional = this.oferta.valor - response.valor;
      }

      this.caixaService.atualizarSaldoPropocional(this.oferta.caixa.codigo, valorProporcional).subscribe();
    });
   // this.caixaService.atualizarSaldoPropocional(this.oferta.caixa.codigo, this.valor).subscribe();    
  }

}
