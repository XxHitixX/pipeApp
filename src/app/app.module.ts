import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';

//CAMBIAR EL IDIOMA A ESPAÑOL se importa el lenguaje del local/global y luego se pasa al
//providers
import  '@angular/common/locales/global/es';
//Otra forma de hacerlo --- la de arriba es mas facil
import LocalFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(LocalFr)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    AppRoutingModule,
    SharedModule,
    VentasModule
    ],
  providers: [
    { provide: LOCALE_ID, useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
