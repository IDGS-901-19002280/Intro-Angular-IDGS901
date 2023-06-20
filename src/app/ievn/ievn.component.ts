import { Component } from "@angular/core";


@Component({
    selector: 'app-ievn',
    template:`
    <h1>IEVN</h1>
    <div>
      <b>Matricula: {{alumno.matricula}}</b></div>
<div><b>Nombre: </b>{{alumno.nombre}}</div>
<div><b>Edad: </b>{{alumno.edad}}</div>

    `
})


export class ievnComponent{
    constructor(){}
    alumno={
        matricula:1234,
        nombre:'Bernardo',
        edad:22,
      
      };
}