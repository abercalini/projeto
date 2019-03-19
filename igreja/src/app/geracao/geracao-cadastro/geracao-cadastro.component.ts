import { Component, OnInit } from '@angular/core';
import { Geracao } from '../geracao';


import { MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { GeracaoService } from '../geracao.service';
import { HistoricoService } from '../../historico/historico.service';
import { SegurancaService } from '../../seguranca/seguranca.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-geracao-cadastro',
  templateUrl: './geracao-cadastro.component.html',
  styleUrls: ['./geracao-cadastro.component.css']
})
export class GeracaoCadastroComponent implements OnInit {

  geracao = new Geracao();
  
  horarioInicial: string;
  horarioFinal: string;
  dias = [];
  estados = [];

  constructor(private messageService: MessageService, private titleService: Title, private gerecaoService: GeracaoService,
    private historicoService: HistoricoService, private segurancaService: SegurancaService, private router: ActivatedRoute) { }

  ngOnInit() {
    const codigo = this.router.snapshot.params['codigo'];
    if (codigo) {
      this.gerecaoService.buscarPorCodigo(codigo).subscribe(response => {
        
        this.geracao = response;
        if (this.geracao.horario) {
          this.horarioInicial = this.geracao.horario.substring(10, 15);
          this.horarioFinal = this.geracao.horario.substring(20, 25);
        }
        this.titleService.setTitle('Editando gereção : ' + response.nome);
      });
    }
      this.titleService.setTitle('Cadastro da geração')
      this.listarDias();
      this.listarEstados();
  }

  listarEstados() {
    this.estados = [
      {value: 'Acre', label: 'Acre'}, {value: 'Alagoas', label: 'Alagoas'}, {value: 'Amapá', label: 'Amapá'}, {value: 'Amazonas', label: 'Amazonas'},
      {value: 'Bahia', label: 'Bahia'}, {value: 'Ceará', label: 'Ceará'}, {value: 'Distrito Federal', label: 'Distrito Federal'}, {value: 'Espírito Santo', label: 'Espírito Santo'},
      {value: 'Goiás', label: 'Goiás'}, {value: 'Maranhão', label: 'Maranhão'}, {value: 'Mato Grosso', label: 'Mato Grosso'}, {value: 'Mato Grosso do Sul', label: 'Mato Grosso do Sul'},
      {value: 'Minas Gerais', label: 'Minas Gerais'}, {value: 'Pará', label: 'Pará'}, {value: 'Paraíba', label: 'Paraíba'}, {value: 'Paraná', label: 'Paraná'},
      {value: 'Pernambuco', label: 'Pernambuco'}, {value: 'Piauí', label: 'Piauí'}, {value: 'Rio de Janeiro', label: 'Rio de Janeiro'}, {value: 'Rio Grande do Norte', label: 'Rio Grande do Norte'},
      {value: 'Rio Grande do Sul', label: 'Rio Grande do Sul'}, {value: 'Rondônia', label: 'Rondônia'}, {value: 'Roraima', label: 'Roraima'}, {value: 'Santa Catarina', label: 'Santa Catarina'},
      {value: 'São Paulo', label: 'São Paulo'}, {value: 'Sergipe', label: 'Sergipe'}, {value: 'Tocantins', label: 'Tocantins'},
    ]
  }

  listarDias() {
    this.dias = [
      {value: 'Segunda', label: 'Segunda'},
      {value: 'Terça', label: 'Terça'},
      {value: 'Quarta', label: 'Quarta'},
      {value: 'Quinta', label: 'Quinta'},
      {value: 'Sexta', label: 'Sexta'},
      {value: 'Sabado', label: 'Sabado'},
      {value: 'Domingo', label: 'Domingo'},
    ]
  }

  salvar(form: NgForm) {
    this.geracao.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.geracao.horario = `Inicia as ` + this.horarioInicial + ` até ` + this.horarioFinal;
    this.gerecaoService.salvar(this.geracao).subscribe(response => {
      
      this.historicoService.salvar('Cadastrou uma geração' + response.nome, this.segurancaService.nomeUsuario).subscribe();
      this.adicionarMensagem('success', 'Cadastro realizado com sucesso', 'Cadastro realizado com sucesso');

      this.geracao = new Geracao();
      form.reset();
    });
  }

  adicionarMensagem(messagemStatus: string, textoMensagem: string, detalheMensagem: string) {
    this.messageService.add({severity: messagemStatus, summary: textoMensagem, detail: detalheMensagem});
  }

  editando(): Boolean {
    return Boolean(this.geracao.codigo);
  }

  prepararSalvar(form: NgForm) {
    if (!this.editando()) {
      this.salvar(form);
    } else {
      this.editar();
    }
  }

  editar() {
    this.geracao.horario = `Inicia as ` + this.horarioInicial + ` até ` + this.horarioFinal;
    this.gerecaoService.editar(this.geracao).subscribe(() => {
        this.adicionarMensagem('success', 'Alterado com sucesso', 'Alterado com sucesso');  
        this.historicoService.salvar('Editou uma geração', this.segurancaService.nomeUsuario).subscribe();
        this.titleService.setTitle('Edição da geração : ' + this.geracao.nome);
    });
  }

}
