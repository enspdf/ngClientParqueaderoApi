import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/Vehiculo.service';
import { Vehiculo } from '../../Interfaces/Vehiculo.interface';

@Component({
    moduleId: module.id,
    selector: 'vehiculo',
    templateUrl: 'index.component.html',
    providers: [ VehiculoService ]
})
export class VehiculoComponent implements OnInit {

    vehiculos : Vehiculo[];

    constructor(private _vehiculoService : VehiculoService) {

    }

    ngOnInit() {
        this._vehiculoService.getVehiculos()
            .subscribe(data => {
                this.vehiculos = data;
            })
    }

}