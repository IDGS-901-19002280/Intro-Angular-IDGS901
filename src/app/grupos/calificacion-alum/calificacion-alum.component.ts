import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calificacion-alum',
  templateUrl: './calificacion-alum.component.html',
  styleUrls: ['./calificacion-alum.component.css']
})
export class CalificacionAlumComponent {
  @Input() califica!:number

  @Output() calificaClick!:number

  onClick(){
    this.calificaClick=this.califica * 76/5
  }
}
