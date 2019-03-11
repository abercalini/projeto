import { SegurancaService } from './../../seguranca/seguranca.service';
import { HistoricoService } from './../../historico/historico.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { TiporeceitaService } from '../tiporeceita.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tiporeceita-pesquisa',
  templateUrl: './tiporeceita-pesquisa.component.html',
  styleUrls: ['./tiporeceita-pesquisa.component.css']
})
export class TiporeceitaPesquisaComponent implements OnInit {

  receitas = [];
  descricaoFilter: string;
  @ViewChild('tabela') tabela;

  constructor(private tipoReceitaService: TiporeceitaService, private titleService: Title,
      private messageService: MessageService, private confirmationService: ConfirmationService,
      private historicoService: HistoricoService, private segurancaService: SegurancaService) { }

  ngOnInit() {
    this.titleService.setTitle('Pesquisa de tipo de receita');
    this.listarReceitas();
  }

  listarReceitas() {
    this.tipoReceitaService.listarTodos(localStorage.getItem('codigo_igreja'), this.descricaoFilter).subscribe(response => {
      this.receitas = response;
    });
  }


  prepararExcluir(codigo: number) {
    this.confirmationService.confirm({
      message: 'Deseja excluir ?',
      accept: () => {
        this.excluir(codigo);
      }
    });
  }

  excluir(codigo) {
    this.tipoReceitaService.excluir(codigo).subscribe(() => {
      this.messageService.add({severity: 'success', detail: 'Excluido com sucesso', summary: 'Excluido com sucesso'});
      this.historicoService.salvar('Excluiu um topo de receita', this.segurancaService.nomeUsuario);
      this.tabela.first = 0;
      this.listarReceitas();
    });
  }

}
