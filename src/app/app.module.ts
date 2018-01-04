import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WineViewComponent } from './components/wine-view/wine-view.component';
import {UserRestServiceService} from "./services/user-rest-service.service";
import {OrderRestServiceService} from "./services/order-rest-service.service";
import {BerryRestServiceService} from "./services/berry-rest-service.service";
import {SellerRestServiceService} from "./services/seller-rest-service.service";
import {WineRestServiceService} from "./services/wine-rest-service.service";


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
  providers: [
    WineRestServiceService,
    SellerRestServiceService,
    BerryRestServiceService,
    OrderRestServiceService,
    UserRestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
