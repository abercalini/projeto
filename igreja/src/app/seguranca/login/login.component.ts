import { Igreja } from './../../igreja/igreja';
import { HistoricoService } from './../../historico/historico.service';
import { MessageService } from 'primeng/api';
import { SegurancaService } from './../seguranca.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailUsuario: string;

  constructor(
    private segurancaService: SegurancaService,
    private messageService: MessageService,
    private historicoService: HistoricoService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  logar(email: string, senha: string) {
    this.segurancaService.logar(email, senha).subscribe(response => {
      this.historicoService.salvar('Entrou no sistema', this.segurancaService.nomeUsuario).subscribe();
      if (this.segurancaService.nomeUsuario === 'bercalini_alisson@hotmail.com') {
        this.router.navigate(['/escolherigreja']);
      } else {
        this.segurancaService.listarUsuario(this.emailUsuario).subscribe(data => {
          localStorage.setItem('codigo_igreja', data.igreja.codigo);
          this.router.navigate(['/membro']);
        });
      }
    });
  }
}
