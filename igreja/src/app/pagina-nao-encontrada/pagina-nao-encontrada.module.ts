import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [PaginaNaoEncontradaComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PaginaNaoEncontradaModule { }
