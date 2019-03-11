import { ActivatedRoute } from '@angular/router';
import { HistoricoService } from './../../historico/historico.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { TipoEntrada } from '../tipoEntrada';
import { NgForm } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { TiporeceitaService } from '../tiporeceita.service';
import { SegurancaService } from 'src/app/seguranca/seguranca.service';

@Component({
  selector: 'app-tiporeceita-cadastro',
  templateUrl: './tiporeceita-cadastro.component.html',
  styleUrls: ['./tiporeceita-cadastro.component.css']
})
export class TiporeceitaCadastroComponent implements OnInit {

  tipoEntrada = new TipoEntrada();

  constructor(private titleService: Title, private tipoReceitaService: TiporeceitaService,
      private messageService: MessageService, private historicoService: HistoricoService, private segurancaService: SegurancaService,
      private router: ActivatedRoute) { }

  ngOnInit() {
    const codigo = this.router.snapshot.params['codigo'];
    if (codigo) {
      this.buscarPorCodigo(codigo);
    } else {
      this.titleService.setTitle('Cadastrar tipo de Entrada');
    }

  }

  salvar(form: NgForm) {
    this.tipoEntrada.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.tipoReceitaService.salvar(this.tipoEntrada).subscribe(response => {
      this.historicoService.salvar('Cadastrou um tipo de entrada ' + response.descricao, this.segurancaService.nomeUsuario).subscribe();
      this.adicionarMensagem('success', 'Cadastro efetuado com sucesso', 'Cadastro efetuado com sucesso');

      form.reset();
      this.tipoEntrada = new TipoEntrada();
    });
  }

  editar() {
    this.tipoReceitaService.editar(this.tipoEntrada).subscribe(response => {
      this.historicoService.salvar('Editou um tipo de receita ' + response.descricao, this.segurancaService.nomeUsuario).subscribe();
      this.atualizarTitulo();
      this.adicionarMensagem('success', 'Alterado com sucesso', 'Alterado com sucesso');
    });
  }

  adicionarMensagem(severity: string, detail: string, summary: string) {
    this.messageService.add({severity: severity, detail: detail, summary: summary});
  }

  buscarPorCodigo(codigo) {
    this.tipoReceitaService.buscarPorCodigo(codigo).subscribe(response => {
        this.tipoEntrada = response;
        this.atualizarTitulo();
    });
  }

  atualizarTitulo() {
    this.titleService.setTitle('Editando tipo receita ' + this.tipoEntrada.descricao);
  }

  editando(): Boolean {
    return Boolean(this.tipoEntrada.codigo);
  }

  prepararSalvar(form: NgForm) {
    if (!this.editando()) {
      this.salvar(form);
    } else {
      this.editar();
    }
  }

}
