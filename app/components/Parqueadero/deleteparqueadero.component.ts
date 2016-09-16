import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from '../../services/Parqueadero.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParqueaderoComponent } from './parqueadero.component';

@Component({
    moduleId: module.id,
    selector: 'parqueadero',
    template: '',
    providers: [ParqueaderoService, ParqueaderoComponent]
})
export class DeleteParqueaderoComponent implements OnInit {
    id : number;
    result : string;

    constructor (private parqueaderoComponent : ParqueaderoComponent, private _parqueaderoService : ParqueaderoService, private _route : ActivatedRoute, private _router : Router) {

    } 
    
    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._parqueaderoService.deleteParqueadero(id)
                    .subscribe(result => {
                        this.result = result;
                    })
            })
            this.redirect();
    }

    redirect() {
        this.parqueaderoComponent.ngOnInit();
        this._router.navigate(['/parqueaderos']);
        this.parqueaderoComponent.successDelete();
    }
}