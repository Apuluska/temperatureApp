import { Component } from '@angular/core';
import { Ciudad } from './ciudad';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temperatura2';
  public ciudades: Array <Ciudad> = [];
  public agregarCiudad(): void {
    this.ciudades.push({
      nombre: 'nombre',
      temperatura: {
        valor: 20,
        tipo: 'ºC'
      }
    });

  }
}
