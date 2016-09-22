import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from '../../services/Parqueadero.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'parqueadero',
    template: '',
    providers: [ParqueaderoService]
})
export class DeleteParqueaderoComponent implements OnInit {
    id: number;
    result: string;

    constructor (private _parqueaderoService: ParqueaderoService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._parqueaderoService.deleteParqueadero(id)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        });
    }

    redirect() {
        this._router.navigate(['/parqueaderos']);
        this.successDelete();
    }

    successDelete() {
        swal('Eliminado', 'El parqueadero se ha eliminado correctamente', 'success');
    }
}
