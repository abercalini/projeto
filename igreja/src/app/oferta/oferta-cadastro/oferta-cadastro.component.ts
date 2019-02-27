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
  cultoFilter = new CultoFilter();

  constructor(private titleService: Title, private ofertaService: OfertaService, private historicoService: HistoricoService,
    private segurancaService: SegurancaService, private messageService: MessageService, private membroService: MembroService,
    private cultoService: CultoService) { }

  ngOnInit() {
    this.titleService.setTitle('Efetuar oferta');
    this.listarMembros();
    this.listarCultos();
    this.listarPagamentos();
  }

  salvar(form: NgForm) {
    this.oferta.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.ofertaService.salvar(this.oferta).subscribe(response => {
      this.historicoService.salvar('Efetuou uma oferta R$' + response.valor, this.segurancaService.nomeUsuario);
      this.adicionarMensagem('success', 'Oferta efetuada com sucesso', 'Oferta efetuada com sucesso');
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
      {label: 'CARTAO DE CREDITO', value: 'CARTAO_DE_CREDITO'},
      {label: 'CARTAO DE DEBITO', value: 'CARTAO_DE_DEBITO'},
      {label: 'DINHEIRO', value: 'DINHEIRO'}
    ]
  }

}
