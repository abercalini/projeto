import { NgModule } from '@angular/core';
import { ReuniaoCadastroComponent } from './reuniao-cadastro/reuniao-cadastro.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [ReuniaoCadastroComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FieldsetModule,
    InputTextModule,
    EditorModule,
    CalendarModule
  ]
})
export class ReuniaoModule { }
