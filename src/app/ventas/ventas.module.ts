import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe'
import { OrdenarNombre } from './pipes/nombre.pipe';



@NgModule({
  declarations: [
    NoComunesComponent,
    BasicosComponent,
    NumerosComponent,
    OrdenarComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenarNombre
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }