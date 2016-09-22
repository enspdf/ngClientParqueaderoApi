import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TarifaService } from '../../services/Tarifa.service';
import { TipoVehiculoService } from '../../services/TipoVehiculo.service';
import { Tarifa } from '../../Interfaces/Tarifa.interface';
import { TipoVehiculo } from '../../Interfaces/TipoVehiculo.interface';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'tarifa',
    templateUrl: 'edit.component.html',
    providers: [ TarifaService, TipoVehiculoService ]
})
export class EditTarifaComponent implements OnInit {
    id:  number;
    tarifa: Tarifa;
    tipoVehiculos: TipoVehiculo[];

    constructor(private _tarifaService: TarifaService, private _tipoVehiculoService: TipoVehiculoService,
      private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._tarifaService.getTarifaById(id)
            .subscribe(result => {
              this.tarifa = result;
            });
        });
        this._tipoVehiculoService.getTiposVehiculo()
          .subscribe(result => {
            this.tipoVehiculos = result;
          });
    }

    onSubmit() {
        if (this.tarifa.idTipo == null) {
          this.validatorMessage();
        } else if (this.tarifa.Costo == null) {
          this.validatorMessage();
        } else {
          this._tarifaService.updateTarifa(this.tarifa.idTarifa, this.tarifa.idTipo, this.tarifa.Costo)
            .subscribe(data => {
              this.redirect();
              this.successUpdate();
            });
        }
    }

    redirect() {
        this._router.navigate(['/tarifas']);
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'error');
    }

    successUpdate() {
        swal('Actualizado', 'La tarifa ha sido actualizada correctamente', 'success');
    }
}
