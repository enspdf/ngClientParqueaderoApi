import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/Cliente.service';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'cliente',
    templateUrl: 'new.component.html',
    providers: [ ClienteService ]
})
export class NewClienteComponent {

    nombres : string;
    apellidos : string;
    result : string;

    constructor(private _clienteService : ClienteService, private _router : Router) {

    }

    onSubmit() {
        if (this.nombres == null) {
            this.validatorMessage();
        } else if (this.apellidos == null) {
            this.validatorMessage();
        } else {
            this._clienteService.savePersona(this.nombres, this.apellidos)
                .subscribe(result => {
                    this.result = result;
                    this.redirect();
                })
        }
    }

    redirect() {
        this._router.navigate(['/clientes']);
        this.successCreate(this.nombres, this.apellidos);
    }

    validatorMessage() {
        swal("Oops...", "Todos los campos son necesarios", "error");
    }

    successCreate(nombres : string, apellidos : string) {
        swal("Bienvenido", nombres + " " + apellidos + " te has registrado correctamente", "success");
    }
}