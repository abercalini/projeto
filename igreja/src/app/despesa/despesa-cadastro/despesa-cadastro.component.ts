import { SegurancaService } from './../../seguranca/seguranca.service';
import { HistoricoService } from './../../historico/historico.service';
import { Title } from '@angular/platform-browser';
import { DespesaService } from './../despesa.service';
import { CaixaService } from './../../caixa/caixa.service';
import { CentroCustoFilter } from './../../centro-custo/centroCustoFilter';
import { CentroCustoService } from './../../centro-custo/centro-custo.service';
import { FornecedorService } from './../../fornecedor/fornecedor.service';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FornecedorFilter } from 'src/app/fornecedor/fornecedorFilter';
import { NgForm } from '@angular/forms';
import { Despesa, Parcela} from '../despesa';

@Component({
  selector: 'app-despesa-cadastro',
  templateUrl: './despesa-cadastro.component.html',
  styleUrls: ['./despesa-cadastro.component.css']
})
export class DespesaCadastroComponent implements OnInit {

  despesa = new Despesa();
  fornecedores = [];
  custos = [];
  caixas = [];
  pagamentos = [];

  fornecedorFilter = new FornecedorFilter();
  centroCustoFilter =  new CentroCustoFilter();
  constructor(private fornecedorService: FornecedorService, private centroCustoService:  CentroCustoService,
    private caixaService: CaixaService, private despesaService: DespesaService, private messageService: MessageService,
    private titleService: Title, private historicoService: HistoricoService, private segurancaService: SegurancaService) { }

  ngOnInit() {
    this.listarFornecedor();
    this.listarCentroCustos();
    this.listarCaixas();
    this.listarPagamentos();
    this.titleService.setTitle('Cadastrar Despesas');
  }

  listarFornecedor() {
    this.fornecedorService.listarTodosParams(localStorage.getItem('codigo_igreja'), this.fornecedorFilter).subscribe(response => {
      this.fornecedores = response.map(f => ({label: f.nome, value: f.codigo}));
    });
  }

  listarCentroCustos() {
    this.centroCustoService.listarTodos(localStorage.getItem('codigo_igreja'), this.centroCustoFilter).subscribe(response => {
      this.custos = response.map(c => ({value: c.codigo, label: c.nome}));
    });
  }

  listarCaixas() {
    this.caixaService.verificarCaixasAbertos(localStorage.getItem('codigo_igreja')).subscribe(response => {
      this.caixas = response.map(c => ({value: c.codigo, label: c.nome}));
    });
  }

  listarPagamentos() {
    this.pagamentos = [
      {label: 'Cartão de credito', value: 'Cartão de credito'},
      {label: 'Cartão de debito', value: 'Cartão de debito'},
      {label: 'Dinheiro', value: 'Dinheiro'},
      {label: 'Cheque', value: 'Cheque'}
    ];
  }

  valorTotal() {
    if (this.despesa.desconto === 0) {
      this.despesa.valorTotal = this.despesa.valor;
    }

    if (this.despesa.desconto !== 0) {
      this.despesa.valorTotal = this.despesa.valor - this.despesa.desconto;
    }

    if (this.despesa.juros !== 0) {
      this.despesa.valorTotal = this.despesa.valor - this.despesa.desconto - this.despesa.juros;
    }
  }

  gerarParcelas() {
    this.despesa.parcelas = [];
    const valorParcela = this.despesa.valorTotal / this.despesa.quantidadeParcela;

    for (let i = 1; i <= this.despesa.quantidadeParcela; i++) {
      this.despesa.parcelas.push({numeroParcela: i, valor: valorParcela});
    }
  }



  salvar(form: NgForm) {
    console.log(this.despesa);
    this.despesa.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.despesaService.salvar(this.despesa).subscribe(response => {
      this.messageService.add({severity: 'success', detail: 'Cadastrado com sucesso', summary: 'Cadastrado com sucesso'});
      this.historicoService.salvar('Cadastrou uma despesa no valor R$ ' + response.valor, this.segurancaService.nomeUsuario).subscribe();
      form.reset();
      this.despesa = new Despesa();
      this.caixaService.atualizarSaldoDespesa(response.caixa.codigo, response.valorTotal).subscribe();
    });
  }



}
