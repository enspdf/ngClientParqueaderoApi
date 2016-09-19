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
import { PersonaComponent } from '../app/components/Cliente/index.component';
import { NewClienteComponent } from '../app/components/Cliente/new.component';
import { DeleteClienteComponent } from '../app/components/Cliente/delete.component';
import { EditClienteComponent } from '../app/components/Cliente/edit.component';
import { TipoVehiculoComponent } from '../app/components/TipoVehiculo/index.component';
import { NewTipoVehiculoComponent } from '../app/components/TipoVehiculo/new.component';
import { DeleteTipoVehiculoComponent } from '../app/components/TipoVehiculo/delete.component';
import { EditTipoVehiculoComponent } from '../app/components/TipoVehiculo/edit.component';
import { TarifaComponent } from '../app/components/Tarifa/index.component';
import { NewTarifaService } from '../app/components/Tarifa/new.component';
import { DeleteTarifaComponent } from '../app/components/Tarifa/delete.component';
import { routing, appRouterProviders } from './app.routes';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, ParqueaderoComponent, 
                  IndexComponent, BahiaComponent, 
                  NewParqueaderoComponent, DeleteParqueaderoComponent,
                  EditParqueaderoComponent, NewBahiaComponent,
                  DeleteBahiaComponent, EditBahiaComponent,
                  PersonaComponent, NewClienteComponent,
                  DeleteClienteComponent, EditClienteComponent,
                  TipoVehiculoComponent, NewTipoVehiculoComponent,
                  DeleteTipoVehiculoComponent, EditTipoVehiculoComponent,
                  TarifaComponent, NewTarifaService,
                  DeleteTarifaComponent ],
  providers: [appRouterProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
