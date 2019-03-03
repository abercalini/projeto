import { SegurancaService } from 'src/app/seguranca/seguranca.service';
import { HistoricoService } from './../../historico/historico.service';
import { CentroCustoService } from './../centro-custo.service';
import { MessageService } from 'primeng/api';

import { CentroCusto } from './../centroCusto';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-centro-custo-cadastro',
  templateUrl: './centro-custo-cadastro.component.html',
  styleUrls: ['./centro-custo-cadastro.component.css']
})
export class CentroCustoCadastroComponent implements OnInit {

  centroCusto = new CentroCusto();
  tipos = [];

  constructor(private centroCustoService: CentroCustoService, private titleService: Title,
    private historicoService: HistoricoService, private segurancaService: SegurancaService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.titleService.setTitle('Cadastro de centro custos');
    this.listarTipos();
  }

  listarTipos() {
    this.tipos = [
      {label: 'Ambos', value: 'Ambos'},
      {label: 'Receita', value: 'Receita'},
      {label: 'Despesa', value: 'Despesa'},
    ];
  }

  salvar(form: NgForm) {
    this.centroCusto.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.centroCustoService.salvar(this.centroCusto).subscribe(response => {
      this.historicoService.salvar('Cadastrou um centro de custo ' + response.nome, this.segurancaService.nomeUsuario).subscribe();
      this.messageService.add({severity: 'success', detail: 'Cadastrado com sucesso', summary: 'Cadastrado com sucesso'});
      form.reset();
      this.centroCusto = new CentroCusto();
    });
  }

}
