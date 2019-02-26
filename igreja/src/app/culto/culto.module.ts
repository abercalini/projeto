import { CultoCadastroComponent } from './culto-cadastro/culto-cadastro.component';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [CultoCadastroComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FieldsetModule,
    InputTextModule,
    ButtonModule,
    ToastModule
  ]
})
export class CultoModule { }
