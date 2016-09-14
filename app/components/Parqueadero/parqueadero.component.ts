import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from '../../services/Parqueadero.service';
import { Parqueadero } from '../../Interfaces/Parqueadero.interface';

@Component({
    moduleId: module.id,
    selector: 'parqueadero',
    templateUrl: 'parqueadero.component.html',
    providers: [ParqueaderoService]
})
export class ParqueaderoComponent implements OnInit {
    IdParqueadero : number;
    parqueaderos : Parqueadero[];

    constructor(private _parqueaderoService : ParqueaderoService) {

    }

    ngOnInit() {
        this._parqueaderoService.getParqueaderos()
            .subscribe(data => {
                this.parqueaderos = data;
            })
    }
}