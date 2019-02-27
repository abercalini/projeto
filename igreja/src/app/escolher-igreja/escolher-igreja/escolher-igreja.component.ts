import { Component, OnInit } from '@angular/core';
import { IgrejaService } from '../../igreja/igreja.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolher-igreja',
  templateUrl: './escolher-igreja.component.html',
  styleUrls: ['./escolher-igreja.component.css']
})
export class EscolherIgrejaComponent implements OnInit {

  codigoIgreja: number;
  igrejas = [];

  constructor(private igrejaService: IgrejaService, private router: Router) { }

  ngOnInit() {
    this.listarIgrejas();
  }

  listarIgrejas() {
    this.igrejaService.listarTodos().subscribe(response => {
      console.log(response);
      this.igrejas = response.map(i => ({value: i.codigo, label: i.nome}));
    });
  }

  escolherAcademia(form: NgForm) {
    localStorage.setItem('codigo_igreja', this.codigoIgreja.toString());
    this.router.navigate(['/membro']);
  }

}
