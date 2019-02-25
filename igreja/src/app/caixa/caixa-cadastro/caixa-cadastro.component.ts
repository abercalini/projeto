import { Component, OnInit } from '@angular/core';
import { Caixa } from '../caixa';

import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { CaixaService } from '../caixa.service';
import { SegurancaService } from '../../seguranca/seguranca.service';
import { HistoricoService } from '../../historico/historico.service';


@Component({
  selector: 'app-caixa-cadastro',
  templateUrl: './caixa-cadastro.component.html',
  styleUrls: ['./caixa-cadastro.component.css']
})
export class CaixaCadastroComponent implements OnInit {

  caixa = new Caixa();
  

  constructor(private messageService: MessageService, private caixaService: CaixaService, private segurancaService: SegurancaService,
    private historicoService: HistoricoService) { }

  ngOnInit() {

  }

  salvar(form: NgForm) {
    this.caixa.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.caixaService.salvar(this.caixa).subscribe(response => {
      this.adicionarMensagem('success', 'Cadastrado com sucesso', 'Cadastrado com sucesso');
      this.historicoService.salvar('Cadastrou um novo Caixa ' + response.nome + ' ', this.segurancaService.nomeUsuario).subscribe();
      form.reset();
      this.caixa = new Caixa();
  });
  }


  adicionarMensagem(serevity: string, detail: string, summary: string) {
      this.messageService.add({severity: serevity, detail: detail, summary: summary});
  }

}
