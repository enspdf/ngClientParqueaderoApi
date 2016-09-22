import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoVehiculoService } from '../../services/TipoVehiculo.service';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'tipovehiculo',
    templateUrl: 'new.component.html',
    providers: [ TipoVehiculoService  ]
})
export class NewTipoVehiculoComponent {

    clase: string;
    result: string;

    constructor(private _tipoVehiculoService: TipoVehiculoService, private _router: Router) {

    }

    onSubmit() {
        if (this.clase == null) {
            this.validatorMessage();
        } else {
          this._tipoVehiculoService.saveTipoVehiculo(this.clase)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        }
    }

    redirect() {
        this._router.navigate(['/tipos']);
        this.successCreate();
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'error');
    }

    successCreate() {
        swal('Creado', 'La clase ' + this.clase + ' se ha creado correctamente', 'success');
    }
}
