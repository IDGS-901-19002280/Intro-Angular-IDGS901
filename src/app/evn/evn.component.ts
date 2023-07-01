import {Component} from '@angular/core';

@Component({
  selector: 'evn-utl',
  template: `
  <div><b>Matricula:</b> {{alumno.matricula}}</div>
    <div><b>Nombre: </b>{{alumno.nombre|uppercase}}</div>
    <div><b>edad: </b>{{alumno.edad}}</div>
    <div><b>fecha de Nacimiento: </b>{{alumno.fechaNacimiento|date}}</div>
    <div><b>Pago: </b>{{alumno.pago|currency}}</div>
  `
})

export class evnComponent{
  constructor(){

  }
  alumno={
    matricula:20000553,
    nombre:'Ulises',
    edad:24,
    fechaNacimiento: new Date(),
    pago: 1100
  }
}
