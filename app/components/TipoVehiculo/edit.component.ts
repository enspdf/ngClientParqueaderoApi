import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoVehiculoService } from '../../services/TipoVehiculo.service';
import { TipoVehiculo } from '../../Interfaces/TipoVehiculo.interface';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'tipos',
    templateUrl: 'edit.component.html',
    providers: [ TipoVehiculoService ]
})
export class EditTipoVehiculoComponent implements OnInit {
    id: number;
    tipoVehiculo: TipoVehiculo;

    constructor(private _tipoVehiculoService: TipoVehiculoService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._tipoVehiculoService.getTipoVehiculoById(id)
            .subscribe(result => {
              this.tipoVehiculo = result;
            });
        });
    }

    onSubmit() {
        if (this.tipoVehiculo.clase == null) {
            this.validatorMessage();
        } else {
          this._tipoVehiculoService.updateTipoVehiculo(this.tipoVehiculo.idTipo, this.tipoVehiculo.clase)
            .subscribe(data => {
              this.redirect();
              this.successUpdate();
            });
        }
    }

    redirect() {
        this._router.navigate(['/tipos']);
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'error');
    }

    successUpdate() {
        swal('Actualizado', 'El tipo vehiculo ha sido actualizado correctamente', 'success');
    }
}
