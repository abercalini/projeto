import { log } from 'util';
import { ArquivoService } from './../arquivo.service';
import { Arquivo } from './../arquivo';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-arquivo-cadastro',
  templateUrl: './arquivo-cadastro.component.html',
  styleUrls: ['./arquivo-cadastro.component.css']
})
export class ArquivoCadastroComponent implements OnInit {

  arquivo = new Arquivo();

  uploadedFiles: any[] = [];

  constructor(private arquivoService: ArquivoService) { }

  ngOnInit() {

  }

  salvar(form: NgForm) {
    this.arquivo.igreja.codigo = localStorage.getItem('codigo_igreja');
    this.arquivoService.salvar(this.arquivo).subscribe(response => {
        console.log(response);
    });
  }

  inputFileSelectd(event) {
   if (event.target.files || event.target.files[0]) {
      const arquivo = event.target.files[0];

      const formData = new FormData();
      formData.append('arquivo', arquivo);

      this.arquivoService.upload(formData).subscribe();
   }
  }

}


