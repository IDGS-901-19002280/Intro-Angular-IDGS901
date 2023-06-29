import { Component } from '@angular/core';

@Component({
    selector : 'app-ievn',
    template : `
        <div class="container">
            <h1>Alumnote de IEVN</h1>
            <h3>{{alumno.nombre}}</h3>
            <p><b>matricula: </b>{{alumno.matricula}}</p>
            <p><b>edad: </b>{{alumno.edad}}</p>
        </div>
    `

})

export class ievnComponent{
    alumno = {
        nombre : 'Chabelo',
        matricula : 19002274,
        edad : 20
    }
}