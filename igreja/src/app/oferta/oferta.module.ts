import { OfertaCadastroComponent } from './oferta-cadastro/oferta-cadastro.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [OfertaCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FieldsetModule,
    DropdownModule,
    ButtonModule,
    TooltipModule,
    ToastModule,
    CalendarModule,
    CurrencyMaskModule,
    InputTextModule
  ]
})
export class OfertaModule { }
