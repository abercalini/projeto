import { SegurancaService } from './../../seguranca/seguranca.service';
import { HistoricoService } from './../../historico/historico.service';
import { Title } from '@angular/platform-browser';
import { CentroCustoService } from './../centro-custo.service';
import { ConfirmationService } from 'primeng/api';
import { CentroCustoFilter } from './../centroCustoFilter';
import { MessageService } from 'primeng/api';


import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-centro-custo-pesquisa',
  templateUrl: './centro-custo-pesquisa.component.html',
  styleUrls: ['./centro-custo-pesquisa.component.css']
})
export class CentroCustoPesquisaComponent implements OnInit {

  custos = [];
  centroCustoFilter = new CentroCustoFilter;
  @ViewChild('tabela') tabela;

  constructor(private centroCustoService: CentroCustoService, private titleService: Title,
      private confirmationService: ConfirmationService, private messageService: MessageService,
      private historicoService: HistoricoService, private segurancaService: SegurancaService) { }

  ngOnInit() {
    this.titleService.setTitle('Pesquisa de centro de custo');
    this.listarTodos();
  }

  listarTodos() {
    this.centroCustoService.listarTodos(localStorage.getItem('codigo_igreja'), this.centroCustoFilter).subscribe(response => {
      this.custos = response;
    });
  }

  excluir(codigo: number) {
    this.confirmationService.confirm({
      message: 'Deseja excluir o centro de custo?',
      accept: () => {
        this.centroCustoService.excluir(codigo).subscribe(() => {
          this.messageService.add({severity: 'success', detail: 'Excluido com sucesso', summary: 'Excluido com sucesso'});
          this.tabela.first = 0;
          this.listarTodos();
          this.historicoService.salvar('Exclui um centro de custo ', this.segurancaService.nomeUsuario).subscribe();
        });
      }
    });
  }


}
