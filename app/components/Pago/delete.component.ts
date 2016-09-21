import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/Pago.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'pagos',
    template: '',
    providers: [ PagoService ]
})
export class DeletePagoComponent implements OnInit {
    id : number;
    result : string;

    constructor(private _pagoService : PagoService, private _route : ActivatedRoute, private _router : Router) {

    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._pagoService.deletePago(id)
                    .subscribe(result => {
                        this.result = result;
                        this.redirect();
                    })
            })
    }

    redirect() {
        this._router.navigate(['/pagos']);
        this.successDelete();
    }

    successDelete() {
        swal("Eliminado", "El pago se ha eliminado correctamente", "success");
    }
}