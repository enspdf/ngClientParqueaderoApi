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
            },
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
];

export const appRouterProviders : any[] = [

];

export const routing = RouterModule.forRoot(routes);