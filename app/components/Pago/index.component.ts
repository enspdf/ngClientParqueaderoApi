import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../services/Pago.service';
import { Pago } from '../../Interfaces/Pago.interface';

@Component({
    moduleId: module.id,
    selector: 'pago',
    templateUrl: 'index.component.html',
    providers: [ PagoService ]
})
export class PagoComponent implements OnInit {

    pagos : Pago[];

    constructor(private _pagoService : PagoService) {

    }

    ngOnInit() {
        this._pagoService.getPagos()
            .subscribe(data => {
                this.pagos = data;  
            })
    }
}