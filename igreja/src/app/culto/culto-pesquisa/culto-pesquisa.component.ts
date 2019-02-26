import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CultoFilter } from '../cultoFilter';

import { CultoService } from '../culto.service';
import { MessageService } from 'primeng/api';
import { HistoricoService } from '../../historico/historico.service';
import { SegurancaService } from '../../seguranca/seguranca.service';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-culto-pesquisa',
  templateUrl: './culto-pesquisa.component.html',
  styleUrls: ['./culto-pesquisa.component.css']
})
export class CultoPesquisaComponent implements OnInit {

  cultos = [];
  cultoFilter = new CultoFilter();
  @ViewChild('tabela') tabela;

  constructor(private titleService: Title, private cultoService: CultoService, private messageService: MessageService,
    private historicoService: HistoricoService, private segurancaService: SegurancaService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.titleService.setTitle('Pesquisa do culto');
    this.pesquisar();
  }

  pesquisar() {
    this.cultoService.listarTodos(this.cultoFilter, localStorage.getItem('codigo_igreja')).subscribe(response => {
      this.cultos = response;
      console.log(response);
    }); 
  }

  excluir(codigo: number) {
    this.confirmationService.confirm({
      message: 'Deseja excluir o culto selecionado?',
      accept: () => {
        this.cultoService.excluir(codigo).subscribe(() => {
          this.tabela.first = 0;
          this.pesquisar();
          this.historicoService.salvar('Excluiu um culto', this.segurancaService.nomeUsuario).subscribe();
          this.messageService.add({severity: 'success', detail: 'Excluido com sucesso', summary: 'Excluido com sucesso'});
        });
      }
    });
  }

}
