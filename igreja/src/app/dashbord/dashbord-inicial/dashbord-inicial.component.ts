import { Component, OnInit } from '@angular/core';
import { MembroService } from '../../membro/membro.service';
import { Membro } from '../../dizimo/dizimo';
import { DizimoService } from '../../dizimo/dizimo.service';
import { OfertaService } from '../../oferta/oferta.service';

@Component({
  selector: 'app-dashbord-inicial',
  templateUrl: './dashbord-inicial.component.html',
  styleUrls: ['./dashbord-inicial.component.css']
})
export class DashbordInicialComponent implements OnInit {

  qtdMembro = 0;
  qtdDizimo = 0;
  qtdOferta = 0;

  constructor(private membroService: MembroService, private dizimoService: DizimoService,
    private ofertaService: OfertaService) { }

  ngOnInit() {
    this.listarMembros();
    this.listarDizimo();
    this.listarOfertas();
  }

  listarMembros() {
    this.membroService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => {
      for(const membro of response) {
        this.qtdMembro ++;
      }
    });
  }

  listarDizimo() {
    this.dizimoService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => {
      for(const dizimo of response) {
        this.qtdDizimo ++;
      }
    });
  }

  listarOfertas() {
    this.ofertaService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => {
      for(const oferta of response) {
        this.qtdOferta ++;
      }
    });
  }

}
