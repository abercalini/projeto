import { Component, OnInit, ViewChild } from '@angular/core';
import { CaixaService } from '../caixa.service';

import { ConfirmationService } from 'primeng/api';
import { HistoricoService } from '../../historico/historico.service';
import { SegurancaService } from '../../seguranca/seguranca.service';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-caixa-pesquisa',
  templateUrl: './caixa-pesquisa.component.html',
  styleUrls: ['./caixa-pesquisa.component.css']
})
export class CaixaPesquisaComponent implements OnInit {

  @ViewChild('tabela') tabela;
  caixas = [];
  display = false;
  status: boolean;
  codigo: number;

  constructor(private caixaService: CaixaService, private confirmationService: ConfirmationService, private historicoService: HistoricoService,
    private segurancaService: SegurancaService, private messageService: MessageService) { }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    this.caixaService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => {
        this.caixas = response;
    });
  }

  showDialog(status: boolean, codigo: number) {
    this.status = status;
    this.codigo = codigo;
    this.display = true;
  }

  alterarStatus() {
    this.display = false;
    this.confirmationService.confirm({
      message: 'Deseja fazer a operação ?',
      accept: () => {
        const status = this.status === true ? false : true;
        this.caixaService.atualizar(this.codigo, status).subscribe(response => {
          this.messageService.add({severity: 'success', detail: 'Alterado com sucesso', summary: 'Alterado com sucesso'});
          this.historicoService.salvar('Alterou um caixa ', this.segurancaService.nomeUsuario).subscribe();
          this.listarTodos();
        }); 
      }
    });
  }

  



}
