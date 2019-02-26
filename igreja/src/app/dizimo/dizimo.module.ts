import { DizimoCadastroComponent } from './dizimo-cadastro/dizimo-cadastro.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [DizimoCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    FieldsetModule,
    DropdownModule,
    ButtonModule,
    TooltipModule,
    RouterModule,
    CurrencyMaskModule,
    InputTextModule,
    ToastModule
  ]
})
export class DizimoModule { }
