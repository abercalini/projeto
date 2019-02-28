import { Component, OnInit } from '@angular/core';

import { OfertaService } from '../oferta.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { CaixaService } from '../../caixa/caixa.service';


@Component({
  selector: 'app-oferta-pesquisa',
  templateUrl: './oferta-pesquisa.component.html',
  styleUrls: ['./oferta-pesquisa.component.css']
})
export class OfertaPesquisaComponent implements OnInit {

  ofertas = [];

  constructor(private ofertaService: OfertaService, private messageService: MessageService, private confirmationService: ConfirmationService,
    private caixaService: CaixaService) { }

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
            this.messageService.add({severity: 'success', summary: 'Excluido com sucesso', detail: ''});
            this.caixaService.atualizarSaldoExclusao(response.caixa.codigo, valor).subscribe();
            console.log(response);
            console.log(valor);
            
            
          });
        }
      });
    });
  }

}
