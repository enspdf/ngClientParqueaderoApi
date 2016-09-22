import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoService } from '../../services/Vehiculo.service';
import { ClienteService } from '../../services/Cliente.service';
import { TipoVehiculoService } from '../../services/TipoVehiculo.service';
import { Persona } from '../../Interfaces/Persona.interface';
import { TipoVehiculo } from '../../Interfaces/TipoVehiculo.interface';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'vehiculo',
    templateUrl: 'new.component.html',
    providers: [ VehiculoService, ClienteService, TipoVehiculoService ]
})
export class NewVehiculoComponent implements OnInit {

    Marca: string;
    IdPersona: number;
    idTipo: number;
    clientes: Persona[];
    tipoVehiculos: TipoVehiculo[];
    result: string;

    constructor(private _vehiculoService: VehiculoService, private _clienteService: ClienteService,
      private _tipoVehiculoService: TipoVehiculoService, private _router: Router) {

    }

    ngOnInit() {
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
        if (this.Marca == null) {
            this.validatorMessage();
        } else if (this.IdPersona == null) {
            this.validatorMessage();
        } else if (this.idTipo == null) {
            this.validatorMessage();
        } else {
          this._vehiculoService.saveVehiculo(this.Marca, this.IdPersona, this.idTipo)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        }
    }

    redirect() {
        this._router.navigate(['/vehiculos']);
        this.successCreate();
    }

    validatorMessage() {
        swal('Oops...', 'todos los campos son necesarios', 'error');
    }

    successCreate() {
        swal('Creado', 'Has registrado tu vehiculo correctamente', 'success');
    }
}
