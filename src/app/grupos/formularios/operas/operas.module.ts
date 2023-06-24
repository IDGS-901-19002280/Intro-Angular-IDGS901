import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule} from '@angular/material/form-field';
import { OperasBasComponent } from '../operas-bas/operas-bas.component';


@NgModule({
  declarations: [
    OperasBasComponent
  ],
  imports: [

    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule

  ],
  exports:[
    OperasBasComponent
  ]
})
export class OperasModule { }
