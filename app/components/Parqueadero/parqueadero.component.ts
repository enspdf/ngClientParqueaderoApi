import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from '../../services/Parqueadero.service';
import { Parqueadero } from '../../Interfaces/Parqueadero.interface';

declare var swal: any;

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

    successParking(name : string) {
        swal("Creado", "El parqueadero " + name + " se ha guardado correctamente", "success");
    }

    successDelete() {
        swal("Eliminado", "El parqueadero se ha eliminado correctamente", "success");
    }

    successUpdate(name : string) {
        swal("Actualizado", "El parqueadero " + name + " se ha eliminado correctamente", "success");
    }
}