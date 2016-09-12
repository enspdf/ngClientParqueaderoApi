import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ParqueaderoService } from '../../services/Parqueadero.service';

@Component({
    moduleId: module.id,
    selector: 'newparqueadero',
    templateUrl: 'newparqueadero.component.html',
    providers: [ParqueaderoService]
})
export class NewParqueaderoComponent {
    nombre : string;
    result : string;

    constructor(private _parqueaderoService : ParqueaderoService, private _router : Router) {

    }

    onSubmit() {
        this._parqueaderoService.saveParqueadero(this.nombre)
            .subscribe(result => {
                this.result = result;
            });
        this.redirect();
    }

    redirect() {
        this._router.navigate(['/parqueaderos']);
    }
}