import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
  // styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items : MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Basicos',
            routerLink: ' ',
            icon: 'pi pi-user-minus'
          },
          {
            label: 'No-Comunes',
            routerLink: '/no-comunes',
            icon: 'pi pi-users'
          },
          {
            label: 'Numeros',
            routerLink: '/numeros',
            icon: 'pi pi-check-circle'
          }
        ]
      },
      {
        label: 'Personalizados',
        routerLink: 'ordenar',
        icon: 'pi pi-cloud'
      }

    ]
  }

}
