import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { utlComponent } from './UTL/utl.component';
import { ievnComponent } from './ievn/ievn.component';
import { MenuComponent } from './grupos/menu/menu.component';
import { SumaComponent } from './grupos/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './grupos/formularios/operas/operas.module';
import { IAlumnoFilterPipe } from './grupos/alumno-filter.pipe';
import { IricComponent } from './grupos/iric/iric.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalificacionAlumComponent } from './grupos/calificacion-alum/calificacion-alum.component';
import { AlumnosReactiveComponent } from './formularios/alumnos-reactive/alumnos-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    utlComponent,
    IricComponent,
    ievnComponent,
    MenuComponent,
    SumaComponent,
    IAlumnoFilterPipe,
    CalificacionAlumComponent,
    AlumnosReactiveComponent
  ],
  imports: [
    BrowserModule,
    OperasModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
