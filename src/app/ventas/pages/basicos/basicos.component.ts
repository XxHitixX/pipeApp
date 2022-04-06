import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower    : string = 'hildefonso';
  nombreUpper    : string = 'HILDEFONSO';
  nombreCompleto : string = 'HiLDeFonsO TiRaDo SocaRRas';

  fecha : Date = new Date();
}
