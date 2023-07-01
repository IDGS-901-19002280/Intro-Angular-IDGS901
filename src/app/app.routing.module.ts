import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IricComponent } from './grupos/iric/iric.component';
import { OperasBasComponent } from './grupos/formularios/operas-bas/operas-bas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'IricComponent', component: IricComponent },
  { path: 'OperasBasComponent', component: OperasBasComponent },
  { path: 'Home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
