import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscolherIgrejaComponent } from './escolher-igreja/escolher-igreja.component';

import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EscolherIgrejaComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    RouterModule
  ]
})
export class EscolherIgrejaModule { }
