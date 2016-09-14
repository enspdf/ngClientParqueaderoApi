import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParqueaderoService } from '../../services/Parqueadero.service';
import { Parqueadero } from '../../Interfaces/Parqueadero.interface';
import { ParqueaderoComponent } from './parqueadero.component';

@Component({
    moduleId: module.id,
    selector: 'parqueadero',
    templateUrl: 'editparqueadero.component.html',
    providers: [ParqueaderoService, ParqueaderoComponent]
})
export class EditParqueaderoComponent implements OnInit {
    id: number;
    parqueadero : Parqueadero;

    constructor(private parqueaderoComponent : ParqueaderoComponent, private _parqueaderoService : ParqueaderoService, private _route : ActivatedRoute, private _router : Router) {

    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._parqueaderoService.getParqueaderoById(id)
                    .subscribe(result => {
                        this.parqueadero = result;
                    })
            })
    }

    onSubmit() {
        this._parqueaderoService.updateParqueadero(this.parqueadero.IdParqueadero, this.parqueadero.nombre)
            .subscribe(data => {
            })
        this.redirect();
    }

    redirect() {
        this.parqueaderoComponent.ngOnInit();
        this._router.navigate(['/parqueaderos']);        
    }
}