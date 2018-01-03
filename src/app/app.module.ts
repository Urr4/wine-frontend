import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WineViewComponent } from './components/wine-view/wine-view.component';


@NgModule({
  declarations: [
    AppComponent,
    WineViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Functional Bootstrap (ngx-bootstrap)
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
