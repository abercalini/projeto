import { Component, OnInit } from '@angular/core';
import { IgrejaService } from '../../igreja/igreja.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-escolher-igreja',
  templateUrl: './escolher-igreja.component.html',
  styleUrls: ['./escolher-igreja.component.css']
})
export class EscolherIgrejaComponent implements OnInit {

  codigoIgreja: number;
  igrejas = [];

  constructor(private igrejaService: IgrejaService) { }

  ngOnInit() {
    this.listarIgrejas();
  }

  listarIgrejas() {
    this.igrejaService.listarTodos().subscribe(response => this.igrejas = response.map(i => ({value: i.codigo, label: i.nome})));
  }

  escolherIgreja(ngForm: NgForm) {
    console.log(ngForm);
  }

}
