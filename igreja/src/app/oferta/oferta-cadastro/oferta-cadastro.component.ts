import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Oferta } from '../oferta';
import { OfertaService } from '../oferta.service';
import { NgForm } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { HistoricoService } from '../../historico/historico.service';
import { SegurancaService } from '../../seguranca/seguranca.service';
import { MembroService } from '../../membro/membro.service';
import { CultoService } from '../../culto/culto.service';
import { CultoFilter } from '../../culto/cultoFilter';
import { CaixaService } from '../../caixa/caixa.service';

@Component({
  selector: 'app-oferta-cadastro',
  templateUrl: './oferta-cadastro.component.html',
  styleUrls: ['./oferta-cadastro.component.css']
})
export class OfertaCadastroComponent implements OnInit {

  oferta = new Oferta();
  membros = [];
  cultos = [];
  pagamentos = [];
  ofertas = [];
  caixas = [];
  cultoFilter = new CultoFilter();

  constructor(private titleService: Title, private ofertaService: OfertaService, private historicoService: HistoricoService,
    private segurancaService: SegurancaService, private messageService: MessageService, private membroService: MembroService,
    private cultoService: CultoService, private caixaService: CaixaService) { }

  ngOnInit() {
    this.titleService.setTitle('Efetuar oferta');
    this.listarMembros();
    this.listarCultos();
    this.listarPagamentos();
    this.listarOfertas();
    this.listaCaixas();
  }

  salvar(form: NgForm) {
    this.oferta.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.ofertaService.salvar(this.oferta).subscribe(response => {
      this.historicoService.salvar('Efetuou uma oferta R$' + response.valor, this.segurancaService.nomeUsuario).subscribe();
      this.adicionarMensagem('success', 'Oferta efetuada com sucesso', 'Oferta efetuada com sucesso');
      this.caixaService.atualizarSaldo(this.oferta.caixa.codigo, response.valor).subscribe();
      form.reset();
      this.oferta = new Oferta();
    });
  }

  adicionarMensagem(severiry: string, detail: string, summary: string) {
    this.messageService.add({severity: severiry, detail: detail, summary: summary});
  }

  listarMembros() {
    this.membroService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => {
      this.membros = response.map(m => ({label: m.nome, value: m.codigo}));
    });
  }

  listarCultos() {
    this.cultoService.listarTodos(this.cultoFilter, localStorage.getItem('codigo_igreja')).subscribe(response => {
      this.cultos = response.map(c => ({label: c.descricao, value: c.codigo}));
    });
  }

  listarPagamentos() {
    this.pagamentos = [
      {label: 'Cartão de credito', value: 'Cartão de credito'},
      {label: 'Cartão de debito', value: 'Cartão de debito'},
      {label: 'Dinheiro', value: 'Dinheiro'}
    ];
  }

  listarOfertas() {
    this.ofertas = [
      {label: 'Oferta para missões', value: 'Oferta para missões'},
      {label: 'Oferta para ação social', value: 'Oferta para ação social'},
      {label: 'Oferta para departamento', value: 'Oferta para departamento'},
      {label: 'Outras ofertas', value: 'Outras ofertas'}
    ];
  }

  listaCaixas() {
    this.caixaService.verificarCaixasAbertos(localStorage.getItem('codigo_igreja'))
      .subscribe(response => this.caixas = response.map(c => ({value: c.codigo, label: c.nome})));
  }

}
