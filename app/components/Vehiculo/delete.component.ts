import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/Vehiculo.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal : any;

@Component({
    moduleId: module.id,
    selector: 'vehiculo',
    template: '',
    providers: [ VehiculoService ]
})
export class DeleteVehiculoComponent implements OnInit {
    id : number;
    result : string;

    constructor(private _vehiculoService : VehiculoService, private _route : ActivatedRoute, private _router : Router) {

    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._vehiculoService.deleteVehiculo(id)
                    .subscribe(result => {
                        this.result = result;
                        this.redirect();
                    })
            })
    }

    redirect() {
        this._router.navigate(['/vehiculos']);
        this.successDelete();
    }

    successDelete() {
        swal("Eliminado", "El vehiculo se ha eliminado correctamente", "success");
    }
}