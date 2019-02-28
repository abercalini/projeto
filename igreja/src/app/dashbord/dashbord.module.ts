import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordInicialComponent } from './dashbord-inicial/dashbord-inicial.component';

import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DashbordInicialComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ]
})
export class DashbordModule { }
