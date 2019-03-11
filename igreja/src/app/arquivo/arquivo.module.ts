import { ArquivoCadastroComponent } from './arquivo-cadastro/arquivo-cadastro.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { ArquivoPesquisaComponent } from './arquivo-pesquisa/arquivo-pesquisa.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [ArquivoCadastroComponent, ArquivoPesquisaComponent],
  imports: [
    CommonModule,
    FormsModule,
    FieldsetModule,
    FileUploadModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    TableModule
  ]
})
export class ArquivoModule { }
