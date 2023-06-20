import { Component } from '@angular/core';
@Component({
    selector: 'app-jesus',
    template:`
    <div>
        <h1>Alumno</h1>
        <h3>{{alumno.Nombre}}</h3>
        <h3>{{alumno.App}}</h3>
        <h3>{{alumno.Apm}}</h3>
        <h3>{{alumno.Matricula}}</h3>
    </div>
    `
})

export class jesusComponent {
    alumno = {
        Nombre: 'Jesús',
        App: 'Méndez',
        Apm: 'Álvarez',
        Matricula: 19002280
    }
}