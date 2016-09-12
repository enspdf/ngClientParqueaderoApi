import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/Index/index.component';
import { ParqueaderoComponent } from './components/Parqueadero/parqueadero.component';
import { NewParqueaderoComponent } from './components/Parqueadero/newparqueadero.component';
import { BahiaComponent } from './components/Bahia/bahia.component';

const routes : Routes = [
    {
        path: '', 
        component: IndexComponent
    },
    {
        path: 'parqueaderos',
        component: ParqueaderoComponent
    },
    {
        path: 'bahias',
        component: BahiaComponent
    },
    {
        path: 'parqueaderos/new',
        component: NewParqueaderoComponent
    },
    {
        path: 'parqueaderos/delete/:id',
        component: ParqueaderoComponent
    }
];

export const appRouterProviders : any[] = [

];

export const routing = RouterModule.forRoot(routes);