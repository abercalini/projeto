import { ArquivoService } from './../arquivo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arquivo-pesquisa',
  templateUrl: './arquivo-pesquisa.component.html',
  styleUrls: ['./arquivo-pesquisa.component.css']
})
export class ArquivoPesquisaComponent implements OnInit {

  arquivos = [];

  constructor(private arquivoService: ArquivoService) { }

  ngOnInit() {
      this.listarTodos();
  }

  listarTodos() {
    this.arquivoService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => {
        this.arquivos = response;
    });
  }

}
