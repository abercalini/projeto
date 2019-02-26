import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CultoService } from '../culto.service';
import { CultoFilter } from '../cultoFilter';

@Component({
  selector: 'app-culto-pesquisa',
  templateUrl: './culto-pesquisa.component.html',
  styleUrls: ['./culto-pesquisa.component.css']
})
export class CultoPesquisaComponent implements OnInit {

  cultos = [];
  cultoFilter = new CultoFilter();

  constructor(private titleService: Title, private cultoService: CultoService) { }

  ngOnInit() {
    this.titleService.setTitle('Pesquisa do culto');
    this.pesquisar();
  }

  pesquisar() {
    this.cultoService.listarTodos(this.cultoFilter, localStorage.getItem('codigo_igreja')).subscribe(response => {
      this.cultos = response;
      console.log(response);
    }); 
  }

}
