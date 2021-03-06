import { DizimoCadastroComponent } from './dizimo-cadastro/dizimo-cadastro.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DizimoPesquisaComponent } from './dizimo-pesquisa/dizimo-pesquisa.component';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [DizimoCadastroComponent, DizimoPesquisaComponent],
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
    ToastModule,
    TableModule,
    CalendarModule,
    InputTextareaModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    DialogModule
  ]
})
export class DizimoModule { }
