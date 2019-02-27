import { Component, OnInit } from '@angular/core';
import { DizimoService } from '../dizimo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dizimo-pesquisa',
  templateUrl: './dizimo-pesquisa.component.html',
  styleUrls: ['./dizimo-pesquisa.component.css']
})
export class DizimoPesquisaComponent implements OnInit {

  dizimos = [];

  constructor(private dizimoService: DizimoService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Pesquisa do Dizimo');
    this.listarTodos();
  }

  listarTodos() {
    this.dizimoService.listarTodos(localStorage.getItem('codigo_igreja')).subscribe(response => this.dizimos = response);
  }

}
