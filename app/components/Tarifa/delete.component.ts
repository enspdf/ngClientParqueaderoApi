import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../../services/Tarifa.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'tarifa',
    template: '',
    providers: [ TarifaService ]
})
export class DeleteTarifaComponent implements OnInit {
    id: number;
    result: string;

    constructor(private _tarifaService: TarifaService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._tarifaService.deleteTarifa(id)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        });
    }

    redirect() {
        this._router.navigate(['/tarifas']);
        this.successDelete();
    }

    successDelete() {
        swal('Eliminado', 'La tarifa se ha eliminado correctamente', 'success');
    }
}
