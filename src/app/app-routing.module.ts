import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WineViewComponent} from "./components/wine-view/wine-view.component";

const routes: Routes = [

  {
    path: '',
    component: WineViewComponent
  },
  {
    path: 'wines',
    component: WineViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
