import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagoService } from '../../services/Pago.service';
import { BahiaService } from '../../services/Bahia.service';
import { VehiculoService } from '../../services/Vehiculo.service';
import { Pago } from '../../Interfaces/Pago.interface';
import { Bahia } from '../../Interfaces/Bahia.interface';
import { Vehiculo } from '../../Interfaces/Vehiculo.interface';

declare var swal : any;

@Component({
    moduleId: module.id,
    selector: 'pagos',
    templateUrl: 'new.component.html',
    providers: [ PagoService, BahiaService, VehiculoService ]
})
export class NewPagoComponent implements OnInit {

    idBahia :  number;
    idVehiculo : number;
    Tiempo : string;
    Costo : number;
    Fecha : Date;
    bahias : Bahia[];
    vehiculos : Vehiculo[];
    result : string;

    constructor(private _pagoService : PagoService, private _bahiaService : BahiaService, private _vehiculoService : VehiculoService, private _router : Router) {

    }

    ngOnInit() {
        this._bahiaService.getBahias()
            .subscribe(result => {
                this.bahias = result;
            })
        this._vehiculoService.getVehiculos()
            .subscribe(result => {
                this.vehiculos = result;
            })
    }

    onSubit() {

    }

    onCalculate() {

    }

    redirect() {

    }

    validatorMessage() {

    }

    successCreate() {

    }
}