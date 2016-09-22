import { Component, OnInit } from '@angular/core';
import { TipoVehiculoService } from '../../services/TipoVehiculo.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'tipos',
    template: '',
    providers: [ TipoVehiculoService ]
})
export class DeleteTipoVehiculoComponent implements OnInit {
    id: number;
    result: string;

    constructor(private _tipoVehiculoService: TipoVehiculoService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._tipoVehiculoService.deleteTipoVehiculo(id)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        });
    }

    redirect() {
        this._router.navigate(['/tipos']);
        this.successDelete();
    }

    successDelete() {
        swal('Eliminado', 'El tipo de vehiculo se ha eliminado correctamente', 'success');
    }
}
