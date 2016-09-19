import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarifaService } from '../../services/Tarifa.service';
import { TipoVehiculoService } from '../../services/TipoVehiculo.service';
import { TipoVehiculo } from '../../Interfaces/TipoVehiculo.interface';

declare var swal : any;

@Component({
    moduleId: module.id,
    selector: 'tarifa',
    templateUrl: 'new.component.html',
    providers: [ TarifaService, TipoVehiculoService ]
})
export class NewTarifaService implements OnInit {

    idTipo : number;
    costo : number;
    tipoVehiculos : TipoVehiculo[];
    result : string;

    constructor(private _tarifaService : TarifaService, private _tipoVehiculoService : TipoVehiculoService, private _router : Router) {

    }

    ngOnInit() {
        this._tipoVehiculoService.getTiposVehiculo()
            .subscribe(result => {
                this.tipoVehiculos = result;
            })
    }

    onSubmit() {
        if (this.idTipo == null) {
            this.validatorMessage();
        } else if(this.costo == null) {
            this.validatorMessage();
        } else {
            this._tarifaService.saveTarifa(this.idTipo, this.costo)
                .subscribe(result => {
                    this.result = result;
                    this.redirect();
                })
        }
    }

    redirect() {
        this._router.navigate(['/tarifas']);
        this.successCreate();
    }

    validatorMessage() {
        swal("Oops...", "Todos los campos son necesarios", "error");
    }

    successCreate() {
        swal("Creado", "La tarifa se ha creado correctamente", "success");
    }

}