import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../services/Vehiculo.service';
import { ClienteService } from '../../services/Cliente.service';
import { TipoVehiculoService } from '../../services/TipoVehiculo.service';
import { Vehiculo } from '../../Interfaces/Vehiculo.interface';
import { Persona } from '../../Interfaces/Persona.interface';
import { TipoVehiculo } from '../../Interfaces/TipoVehiculo.interface';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'vehiculo',
    templateUrl: 'edit.component.html',
    providers: [ VehiculoService, ClienteService, TipoVehiculoService ]
})
export class EditVehiculoComponent implements OnInit {
    id: number;
    vehiculo: Vehiculo;
    clientes: Persona[];
    tipoVehiculos: TipoVehiculo[];

    constructor(private _vehiculoService: VehiculoService, private _clienteService: ClienteService,
      private _tipoVehiculoService: TipoVehiculoService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._vehiculoService.getVehiculoById(id)
            .subscribe(result => {
              this.vehiculo = result;
            });
        });
        this._clienteService.getPersonas()
          .subscribe(result => {
            this.clientes = result;
          });
        this._tipoVehiculoService.getTiposVehiculo()
          .subscribe(result => {
            this.tipoVehiculos = result;
          });
    }

    onSubmit() {
        if (this.vehiculo.Marca == null) {
            this.validatorMessage();
        } else if (this.vehiculo.IdPersona == null) {
            this.validatorMessage();
        } else if (this.vehiculo.idTipo == null) {
            this.validatorMessage();
        } else {
          this._vehiculoService.updateVehiculo(this.vehiculo.idVehiculo, this.vehiculo.Marca, this.vehiculo.IdPersona, this.vehiculo.idTipo)
            .subscribe(data => {
              this.redirect();
            });
        }
    }

    redirect() {
        this._router.navigate(['/vehiculos']);
        this.successUpdate();
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'erro');
    }

    successUpdate() {
        swal('Actualizado', 'El vehiculo ha sido actualizado correctamente', 'success');
    }
}
