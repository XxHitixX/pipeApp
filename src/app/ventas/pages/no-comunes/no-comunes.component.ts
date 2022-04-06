import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs'

import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre : string = 'Emily';
  genero : string = 'femenino';
  
  generoMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  //i18nPlural
  personas : string[] = ['Emily', 'Ana', 'Dylan', 'Gabriel', 'Fatima', 'Hildefonso'];
  personasPlural={
    '=0': 'no hay ningun cliente esperando',
    '=1': 'hay un cliente esperando',
    'other': 'hay # clientes esperando.'
  }
  
  cambiarPersona():void{
    this.nombre = 'Hildefonso';
    this.genero = 'masculino';
  }

  quitarPersona(){
    this.personas.pop();
  }


  //KeyValue Pipe

  persona = {
    direccion: 'Manaure',
    nombre: 'Hildefonso',
    madre: 'Fatima Socarras',
    padre: 'El gran Poncho Tirado'
  }


  //Json Pipe
  heroes = [
    {
    nombre: 'Hildefonso',
    apellido: 'Tirado'
  },
  {
    nombre: 'Emily',
    apellido: 'Borely'
  }
];


//Async Pipe
miObservable = interval(100)
//Async con promesa
valorPromesa = new Promise((resolve, rejects) =>  {

  setTimeout(() => {
    resolve('Tenemos promesa');
  }, 3500);

});

}
