import { Title } from '@angular/platform-browser';
import { CentroCustoService } from './../centro-custo.service';
import { ConfirmationService } from 'primeng/api';
import { CentroCustoFilter } from './../centroCustoFilter';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro-custo-pesquisa',
  templateUrl: './centro-custo-pesquisa.component.html',
  styleUrls: ['./centro-custo-pesquisa.component.css']
})
export class CentroCustoPesquisaComponent implements OnInit {

  custos = [];
  centroCustoFilter = new CentroCustoFilter;

  constructor(private centroCustoService: CentroCustoService, private titleService: Title,
      private confirmationService: ConfirmationService) { }

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

      }
    });
  }


}
