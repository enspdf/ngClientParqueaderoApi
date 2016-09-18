import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ParqueaderoComponent } from '../app/components/Parqueadero/index.component';
import { NewParqueaderoComponent } from '../app/components/Parqueadero/new.component';
import { DeleteParqueaderoComponent } from '../app/components/Parqueadero/delete.component'; 
import { EditParqueaderoComponent } from '../app/components/Parqueadero/edit.component';
import { IndexComponent } from '../app/components/Index/index.component';
import { BahiaComponent } from '../app/components/Bahia/index.component';
import { DeleteBahiaComponent } from '../app/components/Bahia/delete.component';
import { NewBahiaComponent } from '../app/components/Bahia/new.component';
import { EditBahiaComponent } from '../app/components/Bahia/edit.component';
import { routing, appRouterProviders } from './app.routes';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, ParqueaderoComponent, 
                  IndexComponent, BahiaComponent, 
                  NewParqueaderoComponent, DeleteParqueaderoComponent,
                  EditParqueaderoComponent, NewBahiaComponent,
                  DeleteBahiaComponent, EditBahiaComponent ],
  providers: [appRouterProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
