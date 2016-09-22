import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParqueaderoService } from '../../services/Parqueadero.service';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'newparqueadero',
    templateUrl: 'new.component.html',
    providers: [ParqueaderoService]
})
export class NewParqueaderoComponent {
    nombre: string;
    result: string;

    constructor(private _parqueaderoService: ParqueaderoService, private _router: Router) {

    }

    onSubmit() {
        this._parqueaderoService.saveParqueadero(this.nombre)
            .subscribe(result => {
                this.result = result;
                this.redirect();
            });
    }

    redirect() {
        this._router.navigate(['/parqueaderos']);
        this.successParking(this.nombre);
    }

    successParking(name: string) {
        swal('Creado', 'El parqueadero ' + name + ' se ha guardado correctamente', 'success');
    }
}
