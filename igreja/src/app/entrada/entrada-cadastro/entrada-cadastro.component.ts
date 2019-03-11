import { ActivatedRoute } from '@angular/router';
import { SegurancaService } from 'src/app/seguranca/seguranca.service';
import { HistoricoService } from './../../historico/historico.service';
import { Component, OnInit } from '@angular/core';
import { Entrada } from '../entrada';
import { CentroCustoFilter } from 'src/app/centro-custo/centroCustoFilter';
import { NgForm } from '@angular/forms';

import { CentroCustoService } from 'src/app/centro-custo/centro-custo.service';
import { EntradaService } from '../entrada.service';
import { MessageService } from 'primeng/api';
import { TiporeceitaService } from 'src/app/tiporeceita/tiporeceita.service';
import { CaixaService } from './../../caixa/caixa.service';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-entrada-cadastro',
  templateUrl: './entrada-cadastro.component.html',
  styleUrls: ['./entrada-cadastro.component.css']
})
export class EntradaCadastroComponent implements OnInit {

  entrada = new Entrada();
  custos = [];
  receitas = [];
  caixas = [];
  pagamentos = [];

  constructor(private titleService: Title, private centroCustoService: CentroCustoService,
      private tipoReceitaService: TiporeceitaService, private caixaService: CaixaService, private segurancaService: SegurancaService,
      private entradaService: EntradaService, private messsageService: MessageService, private historicoService: HistoricoService,
      private router: ActivatedRoute
      ) { }

  ngOnInit() {
    const codigo = this.router.snapshot.params['codigo'];
    if (codigo) {
      this.buscarPorCodigo(codigo);
    }
      this.titleService.setTitle('Cadastro de Entrada');
      this.listarCentroCusto();
      this.listarReceitas();
      this.listarCaixas();
      this.listarPagamentos();
  }

  listarCentroCusto() {
    this.centroCustoService.listarTodos(localStorage.getItem('codigo_igreja'), new CentroCustoFilter).subscribe(response => {
        this.custos = response.map(c => ({label: c.nome, value: c.codigo}));
    });
  }

  listarReceitas() {
    this.tipoReceitaService.listarTodos(localStorage.getItem('codigo_igreja'), '').subscribe(response => {
      this.receitas = response.map(r => ({label: r.descricao, value: r.codigo}));
    });
  }

  listarCaixas() {
    this.caixaService.verificarCaixasAbertos(localStorage.getItem('codigo_igreja')).subscribe(response => {
      this.caixas = response.map(c => ({label: c.nome, value: c.codigo}));
    });
  }

  listarPagamentos() {
    this.pagamentos = [
      {label: 'Cartão de Credito', value: 'Cartão de Credito'},
      {label: 'Cartão de Debito', value: 'Cartão de Debito'},
      {label: 'Dinheiro', value: 'Dinheiro'},
      {label: 'Cheque', value: 'Cheque'},
    ];
  }

  gerarParcelas() {
    this.entrada.parcelas = [];
    const valorParcela = this.entrada.valorTotal / this.entrada.quantidadeParcela;
    const dataAtual = new Date();
    for (let i = 1; i <= this.entrada.quantidadeParcela; i++) {
      this.entrada.parcelas.push({
        valor: valorParcela,
        dataVencimento: new Date(dataAtual.setMonth(dataAtual.getMonth() + 1))
      });
    }
  }

  gerarValorTotal() {
    this.entrada.valorTotal = this.entrada.valor;
    if (this.entrada.desconto !== 0 || this.entrada.juros !== 0) {
      this.entrada.valorTotal = this.entrada.valor - this.entrada.desconto - this.entrada.juros;
    }
  }

  salvar(form: NgForm) {
    this.entrada.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.entradaService.salvar(this.entrada).subscribe(response => {
        this.caixaService.atualizarSaldo(response.caixa.codigo, response.valorTotal).subscribe();
        this.historicoService.salvar('Cadastrou uma entrada ' + response.valorTotal, this.segurancaService.nomeUsuario).subscribe();
        this.adicionarMensagem('success', 'Cadastro efetuado com sucesso', 'Cadastro efetuado com sucesso');
        form.reset();
        this.entrada = new Entrada;
    });
  }

  adicionarMensagem(severity: string, detail: string, summary: string) {
    this.messsageService.add({severity: severity, detail: detail, summary: summary});
  }

  buscarPorCodigo(codigo: number) {
    this.entradaService.buscarPorCodigo(codigo).subscribe(response => {
        this.entrada = response;
        this.atualizarTitulo();
    });
  }

  atualizarTitulo() {
    this.titleService.setTitle('Editando entrada ' + this.entrada.valorTotal);
  }

}
