import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ParqueaderoComponent } from '../app/components/Parqueadero/parqueadero.component';
import { NewParqueaderoComponent } from '../app/components/Parqueadero/newparqueadero.component';
import { DeleteParqueaderoComponent } from '../app/components/Parqueadero/deleteparqueadero.component'; 
import { IndexComponent } from '../app/components/Index/index.component';
import { BahiaComponent } from '../app/components/Bahia/bahia.component';
import { routing, appRouterProviders } from './app.routes';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, ParqueaderoComponent, IndexComponent, BahiaComponent, NewParqueaderoComponent, DeleteParqueaderoComponent ],
  providers: [appRouterProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
