import { Title } from '@angular/platform-browser';
import { HistoricoService } from './../../historico/historico.service';
import { SegurancaService } from './../../seguranca/seguranca.service';
import { CultoService } from './../culto.service';
import { Culto } from './../culto';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-culto-cadastro',
  templateUrl: './culto-cadastro.component.html',
  styleUrls: ['./culto-cadastro.component.css']
})
export class CultoCadastroComponent implements OnInit {

  culto = new Culto();

  constructor(private cultoService: CultoService, private segurancaService: SegurancaService,
      private historicoService: HistoricoService, private messageService: MessageService,
      private titleService: Title, private router: ActivatedRoute) { }

  ngOnInit() {
    const codigo = this.router.snapshot.params['codigo'];
    if (codigo) {
      this.buscarPorCodigo(codigo);
    } else {
    this.titleService.setTitle('Cadastro do culto');
    }
  }  

  salvar(form: NgForm) {
    this.culto.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.cultoService.salvar(this.culto).subscribe(response => {
      this.adicionarMensagem('success', 'Adicionado com sucesso', 'Adicionando com sucesso');
      this.historicoService.salvar('Cadastrou um culto ' + response.descricao, this.segurancaService.nomeUsuario).subscribe();
      form.reset();
      this.culto = new Culto();
    });
  }

  buscarPorCodigo(codigo: number) {
    this.cultoService.buscarPorCodigo(codigo).subscribe(response => {
      this.culto = response;
      this.atualizarTitulo();
    });
  }

  adicionarMensagem(severity: string, detail: string, summary: string) {
    this.messageService.add({severity: severity, detail: detail, summary: summary});
  }
  
  atualizarTitulo() {
    this.titleService.setTitle('Edição do culto ' + this.culto.descricao);
  }

  editar() {
    this.cultoService.editar(this.culto).subscribe(response => {
      this.historicoService.salvar('Alterou um culto ' + response.descricao, this.segurancaService.nomeUsuario).subscribe();
      this.atualizarTitulo();
      this.adicionarMensagem('success', 'Editado com sucesso', 'Editado com sucesso');
    });
  }

  editando() {
    return Boolean(this.culto.codigo);
  }

  prepararSalvar(form: NgForm) {
    if (!this.editando()) {
      this.salvar(form);
    } else {
      this.editar();      
    }
  }
}
