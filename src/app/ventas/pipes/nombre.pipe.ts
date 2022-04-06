import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';




@Pipe({
    name: 'nombre'
})
export class OrdenarNombre implements PipeTransform{

    transform(heroe: Heroes[], ordenarPor:string) {
       
       switch ( ordenarPor ){
        case 'nombre': 
            return heroe = heroe.sort((a,b) => a.nombre > b.nombre ? 1 : -1 );
        case 'vuela':
            return heroe = heroe.sort((a,b) => a.vuela > b.vuela ? -1 : 1 );
        case 'color':
            return heroe = heroe.sort((a,b) => a.color > b.color ? 1 : -1 );
        default: 
        return heroe;
       }
       
       
       
        // console.log(heroe)
        // heroe = heroe.sort((a,b) => a.nombre > b.nombre ? 1 : -1 );
        // return heroe;
    }

}