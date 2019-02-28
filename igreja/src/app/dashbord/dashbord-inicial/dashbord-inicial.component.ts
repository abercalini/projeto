import { Component, OnInit } from '@angular/core';
import { MembroService } from '../../membro/membro.service';
import { Membro } from '../../dizimo/dizimo';
import { DizimoService } from '../../dizimo/dizimo.service';

@Component({
  selector: 'app-dashbord-inicial',
  templateUrl: './dashbord-inicial.component.html',
  styleUrls: ['./dashbord-inicial.component.css']
})
export class DashbordInicialComponent implements OnInit {

  qtdMembro = 0;
  qtdDizimo = 0;

  constructor(private membroService: MembroService, private dizimoService: DizimoService) { }

  ngOnInit() {
    this.listarMembros();
    this.listarDizimo();
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

}
