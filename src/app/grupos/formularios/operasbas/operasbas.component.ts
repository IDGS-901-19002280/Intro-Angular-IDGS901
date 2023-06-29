import { Component } from '@angular/core';

@Component({
  selector: 'app-operasbas',
  templateUrl: './operasbas.component.html',
  styleUrls: ['./operasbas.component.css']
})
export class OperasbasComponent {
  numer1! : number
  numer2! : number
  reltado! : number
  operacionSeleccionada : string = 'suma'
  tipoOperaciones = [
    'Suma',
    'Resta',
    'Multiplicación',
    'División'
  ]

  calcular() : void {
    switch(this.operacionSeleccionada) {
      case 'Suma': this.reltado = this.numer1 + this.numer2; break;
      case 'Resta': this.reltado = this.numer1 - this.numer2; break;
      case 'Multiplicación': this.reltado = this.numer1 * this.numer2; break;
      case 'División': this.reltado = this.numer1 / this.numer2; break;
    }
  }
}
