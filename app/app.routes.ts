import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/Index/index.component';
import { ParqueaderoComponent } from './components/Parqueadero/index.component';
import { NewParqueaderoComponent } from './components/Parqueadero/new.component';
import { DeleteParqueaderoComponent } from './components/Parqueadero/delete.component';
import { EditParqueaderoComponent } from './components/Parqueadero/edit.component';
import { BahiaComponent } from './components/Bahia/index.component';
import { NewBahiaComponent } from './components/Bahia/new.component';
import { EditBahiaComponent } from './components/Bahia/edit.component';
import { DeleteBahiaComponent } from './components/Bahia/delete.component';
import { PersonaComponent } from './components/Cliente/index.component';
import { NewClienteComponent } from './components/Cliente/new.component';
import { DeleteClienteComponent } from './components/Cliente/delete.component';
import { EditClienteComponent } from './components/Cliente/edit.component';
import { TipoVehiculoComponent } from './components/TipoVehiculo/index.component'
import { NewTipoVehiculoComponent } from './components/TipoVehiculo/new.component';
import { DeleteTipoVehiculoComponent } from './components/TipoVehiculo/delete.component';
import { EditTipoVehiculoComponent } from './components/TipoVehiculo/edit.component';
import { TarifaComponent } from './components/Tarifa/index.component';
import { NewTarifaService } from './components/Tarifa/new.component';
import { DeleteTarifaComponent } from './components/Tarifa/delete.component';
import { EditTarifaComponent } from './components/Tarifa/edit.component';
import { VehiculoComponent } from './components/Vehiculo/index.component';
import { NewVehiculoComponent } from './components/Vehiculo/new.component';
import { DeleteVehiculoComponent } from './components/Vehiculo/delete.component';
import { EditVehiculoComponent } from './components/Vehiculo/edit.component';
import { PagoComponent } from './components/Pago/index.component';

const routes : Routes = [
    {
        path: '', 
        component: IndexComponent
    },
    {
        path: 'parqueaderos',
        children: [
            {
                path: '',
                component: ParqueaderoComponent
            },
            {
                path: 'new',
                component: NewParqueaderoComponent
            },  
            {
            path: 'delete/:id',
                component: DeleteParqueaderoComponent
            },
            {
                path: 'edit/:id',
                component: EditParqueaderoComponent
            }
        ]
    },    
    {
        path: 'bahias',
        children: [
            {
                path: '',
                component: BahiaComponent
            },
            {
                path: 'new',
                component: NewBahiaComponent
            },
            {
                path: 'delete/:id',
                component: DeleteBahiaComponent
            },
            {
                path: 'edit/:id',
                component: EditBahiaComponent
            },
        ]
    },
    {
        path: 'clientes',
        children: [
            {
                path: '',
                component: PersonaComponent
            },
            {
                path: 'new',
                component: NewClienteComponent
            },
            {
                path: 'delete/:id',
                component: DeleteClienteComponent
            },
            {
                path: 'edit/:id',
                component: EditClienteComponent
            }
        ]
    },
    {
        path: 'tipos',
        children: [
            {
                path: '',
                component: TipoVehiculoComponent
            },
            {
                path: 'new',
                component: NewTipoVehiculoComponent
            },
            {
                path: 'delete/:id',
                component: DeleteTipoVehiculoComponent
            },
            {
                path: 'edit/:id',
                component: EditTipoVehiculoComponent
            }
        ]
    },
    {
        path: 'tarifas',
        children: [
            {
                path: '',
                component: TarifaComponent
            },
            {
                path: 'new',
                component: NewTarifaService
            },
            {
                path: 'delete/:id',
                component: DeleteTarifaComponent
            },
            {
                path: 'edit/:id',
                component: EditTarifaComponent
            }
        ]
    },
    {
        path: 'vehiculos',
        children: [
            {
                path: '',
                component: VehiculoComponent
            },
            {
                path: 'new',
                component: NewVehiculoComponent
            },
            {
                path: 'delete/:id',
                component: DeleteVehiculoComponent
            },
            {
                path: 'edit/:id',
                component: EditVehiculoComponent
            }
        ]
    }, 
    {
        path: 'pagos',
        children: [
            {
                path: '',
                component: PagoComponent
            }
        ]
    }
];

export const appRouterProviders : any[] = [

];

export const routing = RouterModule.forRoot(routes);