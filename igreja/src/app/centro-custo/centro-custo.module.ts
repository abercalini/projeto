import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


import { CentroCustoCadastroComponent } from './centro-custo-cadastro/centro-custo-cadastro.component';
import { CentroCustoPesquisaComponent } from './centro-custo-pesquisa/centro-custo-pesquisa.component';


@NgModule({
  declarations: [CentroCustoCadastroComponent, CentroCustoPesquisaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FieldsetModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    TableModule,
    TooltipModule,
    ConfirmDialogModule
  ]
})
export class CentroCustoModule { }
