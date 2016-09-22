import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../../services/Tarifa.service';
import { Tarifa } from '../../Interfaces/Tarifa.interface';

@Component({
    moduleId: module.id,
    selector: 'tarifa',
    templateUrl: 'index.component.html',
    providers: [ TarifaService ]
})
export class TarifaComponent implements OnInit {

    tarifas: Tarifa[];

    constructor(private _tarifaService: TarifaService) {

    }

    ngOnInit() {
      this._tarifaService.getTarifas()
        .subscribe(data => {
          this.tarifas = data;
        });
    }
}
