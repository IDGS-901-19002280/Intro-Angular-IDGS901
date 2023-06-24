import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { utlComponent } from './UTL/utl.component';
import { IricComponent } from './grupos/iric/iric.component';
import { ievnComponent } from './ievn/ievn.component';
import { MenuComponent } from './grupos/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './grupos/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasBasComponent } from './grupos/formularios/operas-bas/operas-bas.component';
import { OperasModule } from './grupos/formularios/operas/operas.module';
import { AlumnoFilterPipe } from './grupos/alumno-filter.pipe';
import { CalificacionAlumComponent } from './grupos/calificacion-alum/calificacion-alum.component';


@NgModule({
  declarations: [
    AppComponent,
    utlComponent,
    ievnComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
    AlumnoFilterPipe,
    CalificacionAlumComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
