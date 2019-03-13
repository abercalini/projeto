import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeracaoCadastroComponent } from './geracao-cadastro/geracao-cadastro.component';

import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [GeracaoCadastroComponent],
  imports: [
    CommonModule,
    FieldsetModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    InputMaskModule,
    DropdownModule
    
  ]
})
export class GeracaoModule {}
