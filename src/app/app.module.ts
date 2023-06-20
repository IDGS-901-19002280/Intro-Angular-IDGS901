import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { utlComponent } from './utl/utl.component';
import { IricComponent } from './grupos/iric/iric.component';
import { ievnComponent } from './ievn/ievn.component';
import { MenuComponent } from './grupos/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './grupos/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasBasComponent } from './grupos/formularios/operas-bas/operas-bas.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    utlComponent,
    ievnComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
    OperasBasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
