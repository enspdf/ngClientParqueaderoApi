import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParqueaderoService } from '../../services/Parqueadero.service';
import { Parqueadero } from '../../Interfaces/Parqueadero.interface';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'parqueadero',
    templateUrl: 'edit.component.html',
    providers: [ParqueaderoService]
})
export class EditParqueaderoComponent implements OnInit {
    id: number;
    parqueadero : Parqueadero;

    constructor(private _parqueaderoService : ParqueaderoService, private _route : ActivatedRoute, private _router : Router) {

    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._parqueaderoService.getParqueaderoById(id)
                    .subscribe(result => {
                        this.parqueadero = result;
                    })
            })
    }

    onSubmit() {
        this._parqueaderoService.updateParqueadero(this.parqueadero.IdParqueadero, this.parqueadero.nombre)
            .subscribe(data => {
                this.redirect();
                this.successUpdate(this.parqueadero.nombre);
            })
    }

    redirect() {
        this._router.navigate(['/parqueaderos']);        
    }

    successUpdate(name : string) {
        swal("Actualizado", "El parqueadero " + name + " se ha actualizado correctamente", "success");
    }
}