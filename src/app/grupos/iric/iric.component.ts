import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  alumnoTitle!:string;

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }
alumnosIric:IAlumnosIric[]=[
  {
    matricula:19002280,
    nombre:'Jesús',
    edad:22,
    correo: "jesusmendezalvarez9@gmail.com",
    foto: "https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    calif: 6.2
},
{
  matricula:14522456,
  nombre:'Adolf Hitler',
  edad: 30,
  correo: "AdolfitoHitler@hotmail.com",
  foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Adolf_Hitler_cropped_restored.jpg/220px-Adolf_Hitler_cropped_restored.jpg",
  calif: 10
},
{
  matricula:69696969,
  nombre:'Alex',
  edad: 27,
  correo: "alexmar@hotmail.com",
  foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlZ0Ewh-tc1Jt-xwlqZAvf0ZW2HuVL4qZdxthC-0ZOq0lzNoYa894JXC5d_anmurDrHg&usqp=CAU",
  calif: 8
}
]

onCalificaClick(message:string){
 this.alumnoTitle=`alumnos ${message}`;
}
}
