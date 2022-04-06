import { Component } from '@angular/core';
import { color, Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{

  esMayusculas:boolean = true
  valor: string = '';


  cambiar():void{
    this.esMayusculas = !this.esMayusculas;
  }
  
  heroes : Heroes[] = [
    {
      nombre: 'Batman',
      vuela : true,
      color: color.azul
    },
    {
      nombre: 'Homero',
      vuela : false,
      color: color.amarillo
    },
    {
      nombre: 'Supeman',
      vuela : false,
      color: color.verde
    },
    {
      nombre: 'Emily',
      vuela : false,
      color: color.azul
    },
    {
      nombre: 'Fatima',
      vuela : true,
      color: color.verde
    },
    {
      nombre: 'Poncho',
      vuela : true,
      color: color.azul
    }
  ]

  cambiarValor(valor:string){
    this.valor = valor;
  }

}
