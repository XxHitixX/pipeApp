import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    
    transform(valor: string, esMayuscula: boolean = true){
        return (esMayuscula) ? valor.toUpperCase() : valor.toLowerCase();
    }



}