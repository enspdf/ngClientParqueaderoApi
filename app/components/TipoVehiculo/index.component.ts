import { Component, OnInit } from '@angular/core';
import { TipoVehiculoService } from '../../services/TipoVehiculo.service';
import { TipoVehiculo } from '../../Interfaces/TipoVehiculo.interface';

@Component({
    moduleId: module.id,
    selector: 'tipovehiculo',
    templateUrl: 'index.component.html',
    providers: [ TipoVehiculoService ]
})
export class TipoVehiculoComponent implements OnInit {

    tipoVehiculos : TipoVehiculo[];

    constructor(private _tipoVehiculoService : TipoVehiculoService) {

    }

    ngOnInit() {
        this._tipoVehiculoService.getTiposVehiculo()
            .subscribe(data => {
                this.tipoVehiculos = data;
            })
    }
}