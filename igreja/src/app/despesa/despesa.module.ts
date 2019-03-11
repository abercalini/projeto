import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesaCadastroComponent } from './despesa-cadastro/despesa-cadastro.component';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SpinnerModule } from 'primeng/spinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [DespesaCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    FieldsetModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    RouterModule,
    CalendarModule,
    TooltipModule,
    CurrencyMaskModule,
    ToggleButtonModule,
    SpinnerModule,
    TableModule,
    ToastModule
  ]
})
export class DespesaModule { }
