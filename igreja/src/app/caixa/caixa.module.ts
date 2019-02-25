import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaCadastroComponent } from './caixa-cadastro/caixa-cadastro.component';

import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


import { CurrencyMaskModule } from "ng2-currency-mask";
import { CaixaPesquisaComponent } from './caixa-pesquisa/caixa-pesquisa.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CaixaCadastroComponent, CaixaPesquisaComponent],
  imports: [
    CommonModule,
    FormsModule,
    FieldsetModule,
    InputTextModule,
    CurrencyMaskModule,
    CalendarModule,
    ButtonModule,
    ToastModule,
    TableModule,
    RouterModule,
    TooltipModule,
    DialogModule,
    ConfirmDialogModule
  ]
})
export class CaixaModule { }
