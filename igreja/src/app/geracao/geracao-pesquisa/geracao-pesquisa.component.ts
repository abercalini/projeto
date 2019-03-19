import { Component, OnInit, ViewChild } from '@angular/core';
import { GeracaoService } from '../geracao.service';
import { SegurancaService } from '../../seguranca/seguranca.service';
import { HistoricoService } from '../../historico/historico.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-geracao-pesquisa',
  templateUrl: './geracao-pesquisa.component.html',
  styleUrls: ['./geracao-pesquisa.component.css']
})
export class GeracaoPesquisaComponent implements OnInit {

  geracoes = [];
  @ViewChild('tabela') tabela;
  @ViewChild('pesquisaFiltro') filtro;

  constructor(private geracaoService: GeracaoService, private segurancaService: SegurancaService, private historicoService: HistoricoService,
    private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.geracaoService.listar(this.filtro.nativeElement.value, localStorage.getItem('codigo_igreja')).subscribe(response => {
      this.geracoes = response;
    });
  }


  excluir(codigo: number) {
    this.confirmationService.confirm({
      message: 'Deseja excluir a geração?',
      accept: () => {
        this.geracaoService.excluir(codigo).subscribe(() => {
          this.messageService.add({severity: 'success', detail: 'Excluido com sucesso', summary: 'Excluido com sucesso'});
          this.tabela.fist = 0;
          this.pesquisar();
          this.historicoService.salvar('Excluiu uma geração', this.segurancaService.nomeUsuario).subscribe();
        });
      }
    });
  } 

  

}
