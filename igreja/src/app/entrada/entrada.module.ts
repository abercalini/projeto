import { EntradaCadastroComponent } from './entrada-cadastro/entrada-cadastro.component';
import { EntradaPesquisaComponent } from './entrada-pesquisa/entrada-pesquisa.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SpinnerModule } from 'primeng/spinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [EntradaCadastroComponent, EntradaPesquisaComponent],
  imports: [
    CommonModule,
    FormsModule,
    FieldsetModule,
    InputTextModule,
    DropdownModule,
    RouterModule,
    ButtonModule,
    TooltipModule,
    CalendarModule,
    CurrencyMaskModule,
    ToggleButtonModule,
    SpinnerModule,
    TableModule,
    ToastModule,
    OverlayPanelModule,
    ConfirmDialogModule
  ]
})
export class EntradaModule { }
