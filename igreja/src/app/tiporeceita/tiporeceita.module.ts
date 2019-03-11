import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


import { TiporeceitaCadastroComponent } from './tiporeceita-cadastro/tiporeceita-cadastro.component';
import { TiporeceitaPesquisaComponent } from './tiporeceita-pesquisa/tiporeceita-pesquisa.component';

@NgModule({
  declarations: [TiporeceitaCadastroComponent, TiporeceitaPesquisaComponent],
  imports: [
    CommonModule,
    FormsModule,
    FieldsetModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    RouterModule,
    TableModule,
    TooltipModule,
    ConfirmDialogModule
  ]
})
export class TiporeceitaModule { }
