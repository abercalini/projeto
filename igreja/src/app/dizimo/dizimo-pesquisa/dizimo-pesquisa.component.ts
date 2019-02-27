import { Component, OnInit } from '@angular/core';
import { DizimoService } from '../dizimo.service';

@Component({
  selector: 'app-dizimo-pesquisa',
  templateUrl: './dizimo-pesquisa.component.html',
  styleUrls: ['./dizimo-pesquisa.component.css']
})
export class DizimoPesquisaComponent implements OnInit {

  dizimos = [];

  constructor(private dizimoService: DizimoService) { }

  ngOnInit() {

  }

  listarTodos() {

  }

}
