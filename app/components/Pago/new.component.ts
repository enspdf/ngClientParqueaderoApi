import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagoService } from '../../services/Pago.service';
import { BahiaService } from '../../services/Bahia.service';
import { VehiculoService } from '../../services/Vehiculo.service';
import { TipoVehiculoService } from '../../services/TipoVehiculo.service';
import { TarifaService } from '../../services/Tarifa.service'; 
import { Pago } from '../../Interfaces/Pago.interface';
import { Bahia } from '../../Interfaces/Bahia.interface';
import { Vehiculo } from '../../Interfaces/Vehiculo.interface';
import { TipoVehiculo } from '../../Interfaces/TipoVehiculo.interface';
import { Tarifa } from '../../Interfaces/Tarifa.interface';

declare var swal : any;

@Component({
    moduleId: module.id,
    selector: 'pagos',
    templateUrl: 'new.component.html',
    providers: [ TarifaService, PagoService, BahiaService, VehiculoService, TipoVehiculoService ]
})
export class NewPagoComponent implements OnInit {

    idBahia :  number;
    idVehiculo : number;
    Tiempo : string;
    Costo : number;
    Fecha : Date;
    bahias : Bahia[];
    vehiculos : Vehiculo[];
    vehiculoSelected : Vehiculo;
    tarifaVehiculoSelected : TipoVehiculo;
    totalTarifaVehiculo : Tarifa;
    tarifa : number = 2000;
    result : string;

    constructor(private _tarifaService : TarifaService, private _tipoVehiculoService : TipoVehiculoService, private _pagoService : PagoService, private _bahiaService : BahiaService, private _vehiculoService : VehiculoService, private _router : Router) {

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

    onSubmit() {
        if (this.idBahia == null) {
            this.validatorMessage();
        } else if (this.idVehiculo == null) {
            this.validatorMessage();
        } else if (this.Tiempo == null) {
            this.validatorMessage();
        } else if (this.Costo == null) {
            this.validatorMessage();
        } else if (this.Fecha == null) {
            this.validatorMessage();
        } else {
            this._pagoService.savePago(this.idBahia, this.idVehiculo, this.Tiempo, this.Costo, this.Fecha)
                .subscribe(result => {
                    this.result = result;
                    this.redirect();
                })
        }
    }

    onCalculate() {
        if (this.Tiempo == null) {
            swal("Oops...", "Debes ingresar las horas de estancia", "error");
        } else if (this.idVehiculo == null) {
            swal("Oops...", "Debes de seleccionar un vehiculo", "error");
        } else {
            this.Costo = this.tarifa * +this.Tiempo;
            console.log(this.Costo);
            /* this._vehiculoService.getVehiculoById(this.idVehiculo)
                .subscribe(result => {
                    this.vehiculoSelected = result;
                    this._tipoVehiculoService.getTipoVehiculoById(this.vehiculoSelected.idTipo)
                        .subscribe(result => {
                            this.tarifaVehiculoSelected = result;
                            /*this._tarifaService.getTarifaById(this.tarifaVehiculoSelected.idTipo)
                            .subscribe(result => {
                                this.totalTarifaVehiculo = result;
                                console.log(this.totalTarifaVehiculo.Costo);
                            })
                        }) 
                }) */
            
        }
    }

    redirect() {
        this._router.navigate(['/pagos']);
        this.successCreate();
    }

    validatorMessage() {
        swal("Oops...", "Todos los campos son necesarios", "error");
    }

    successCreate() {
        swal("Pagado", "El pago se ha realizado correctamente", "success");
    }
}