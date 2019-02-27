import { Component, OnInit } from '@angular/core';
import { Dizimo } from '../dizimo';
import { MembroService } from '../../membro/membro.service';
import { CultoService } from '../../culto/culto.service';
import { CultoFilter } from '../../culto/cultoFilter';
import { CaixaService } from '../../caixa/caixa.service';
import { DizimoService } from '../dizimo.service';
import { MessageService } from 'primeng/api';

import { NgForm } from '@angular/forms';
import { HistoricoService } from '../../historico/historico.service';
import { SegurancaService } from '../../seguranca/seguranca.service';

@Component({
  selector: 'app-dizimo-cadastro',
  templateUrl: './dizimo-cadastro.component.html',
  styleUrls: ['./dizimo-cadastro.component.css']
})
export class DizimoCadastroComponent implements OnInit {

  dizimo = new Dizimo();
  membros = [];
  cultos = [];
  pagamentos = [];
  caixas = [];
  cultoFilter = new CultoFilter();

  caixaSelecionado = [];

 // caixaSelecionado = [];

  constructor(private membroService: MembroService, private cultoService: CultoService, private caixaService: CaixaService,
    private dizimoService: DizimoService, private messageService: MessageService, private historicoService: HistoricoService,
    private segurancaService: SegurancaService) { }

  ngOnInit() {
    this.listarMembros();
    this.listarCultos();
    this.listarPagamentos();
    this.listarCaixas();
  }

  listarMembros() {
    this.membroService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => {
      this.membros = response.map(m => ({value: m.codigo, label: m.nome}));
    });
  }

  listarCultos() {
    this.cultoService.listarTodos(this.cultoFilter, localStorage.getItem('codigo_igreja')).subscribe(response => {
      this.cultos = response.map(c => ({value: c.codigo, label: c.descricao}));
    });
  }

  listarCaixas() {
    this.caixaService.verificarCaixasAbertos(localStorage.getItem('codigo_igreja')).subscribe(response => {
      this.caixas = response.map(c => ({label: c.nome, value: c.codigo}));
    });
  }

  listarPagamentos() {
    this.pagamentos = [
      {label: 'CARTAO DE CREDITO', value: 'CARTAO_DE_CREDITO'},
      {label: 'CARTAO DE DEBITO', value: 'CARTAO_DE_DEBITO'},
      {label: 'DINHEIRO', value: 'DINHEIRO'},
      {label: 'DEPOSITO', value: 'DEPOSITO'},
      {label: 'CHEQUE', value: 'CHEQUE'}
    ];
  }

  testeData() {
    console.log(this.dizimo.dataDizimo);
  }

  salvar(form: NgForm) {
    this.dizimo.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.dizimoService.salvar(this.dizimo).subscribe(response => {

      this.caixaService.atualizarSaldo(this.caixaSelecionado, response.valor).subscribe();
      this.messageService.add({severity: 'success', detail: 'Dizimo efetuado com sucesso', summary: 'Dizimo efetuado com sucesso'});
      this.historicoService.salvar('Efetuou um dizimo valor R$' + response.valor, this.segurancaService.nomeUsuario).subscribe();

      this.dizimo = new Dizimo();
      form.reset();
    });
  }

}
