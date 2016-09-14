import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParqueaderoService } from '../../services/Parqueadero.service';
import { Parqueadero } from '../../Interfaces/Parqueadero.interface';

@Component({
    moduleId: module.id,
    selector: 'parqueadero',
    templateUrl: 'editparqueadero.component.html',
    providers: [ParqueaderoService]
})
export class EditParqueaderoComponent implements OnInit {
    id: number;
    parqueadero : Parqueadero;

    constructor(private _parqueaderoService : ParqueaderoService, private _route : ActivatedRoute, private _router : Router) {

    }

    ngOnInit() {
        this._router
    }

}