import { Component } from "@angular/core";


@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number=100
  imageMargin:number=2
  muestraImg:boolean=true
  listfilter?:string
  
  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:any[]=[
    {
      
        matricula:12344,
        nombre:'Zamora',
        edad:8,
        correo:"Zamora@gmail.com",
        foto:"https://c.pxhere.com/photos/fb/0a/child_smile_happy_infante_small_face_son_brother-646105.jpg!d"      
    },
    {
      
      matricula:222425,
      nombre:'Luna',
      edad:23,
      correo:"Luna@gmail.com",
      foto:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    }
    ,
    {
      
      matricula:12345,
      nombre:'Marco',
      edad:24,
      correo:"Marco@gmail.com",
      foto:'https://th.bing.com/th/id/R.5ce936c4a65660653ac3b674fc9f9a36?rik=L%2bIZ%2bOVxOexXXA&riu=http%3a%2f%2ftusimagenesde.com%2fwp-content%2fuploads%2f2014%2f09%2fimagenes-de-personas-1.jpg&ehk=hw2S4IJ5ETZkDn3Apryd8D%2bIZD%2bTl1GSq2pHiDWuquw%3d&risl=&pid=ImgRaw&r=0'
    }
  ]

  
  


}
