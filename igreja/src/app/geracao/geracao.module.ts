import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeracaoCadastroComponent } from './geracao-cadastro/geracao-cadastro.component';

import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { GeracaoPesquisaComponent } from './geracao-pesquisa/geracao-pesquisa.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [GeracaoCadastroComponent, GeracaoPesquisaComponent],
  imports: [
    CommonModule,
    FieldsetModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    InputMaskModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    TableModule,
    TooltipModule,
    RouterModule,
    ConfirmDialogModule
    
  ]
})
export class GeracaoModule {}
