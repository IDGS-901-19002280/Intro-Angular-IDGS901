import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs901';
  alumno = {
    matricula : 12345,
    nombre : 'Pedro',
    edad : 25,
    fechanac : new Date(),
    pego : 128.38
  }

  calcular3(n:number): number {
    return n * 2;
  }
}
