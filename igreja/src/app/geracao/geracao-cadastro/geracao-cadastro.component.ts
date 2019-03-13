import { Component, OnInit } from '@angular/core';
import { Geracao } from '../geracao';

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
  

  constructor() { }

  ngOnInit() {
      this.listarDias();
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

  

}
