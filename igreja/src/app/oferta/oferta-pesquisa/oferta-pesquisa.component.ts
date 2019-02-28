import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../oferta.service';

@Component({
  selector: 'app-oferta-pesquisa',
  templateUrl: './oferta-pesquisa.component.html',
  styleUrls: ['./oferta-pesquisa.component.css']
})
export class OfertaPesquisaComponent implements OnInit {

  ofertas = [];

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.ofertaService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => this.ofertas = response);
  }

}
