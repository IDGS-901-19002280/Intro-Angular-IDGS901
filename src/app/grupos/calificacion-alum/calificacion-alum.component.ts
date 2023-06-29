import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calificacion-alum',
  templateUrl: './calificacion-alum.component.html',
  styleUrls: ['./calificacion-alum.component.css']
})
export class CalificacionAlumComponent {
  @Input() califica!: number;

  @Output() calificaCLick: EventEmitter<string> = new EventEmitter();
  puntosCal!: number;

  ngOnChanges(): void {
    this.puntosCal = this.califica * 75 / 10;
    console.log(this.califica)
    console.log(this.puntosCal);
  }

  onClick() {
    this.calificaCLick.emit(`Has calificado al alumno ${this.califica}`);
  }
}
