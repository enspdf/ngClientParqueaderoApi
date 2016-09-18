import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/Cliente.service';
import { Persona } from '../../Interfaces/Persona.interface';

@Component({
    moduleId: module.id,
    selector: 'persona',
    templateUrl: 'index.component.html',
    providers: [ ClienteService ]
})
export class PersonaComponent implements OnInit {

    personas : Persona[];

    constructor(private _clienteService : ClienteService) {

    }

    ngOnInit() {
        this._clienteService.getPersonas()
            .subscribe(data => {
                this.personas = data;
            })
    }

}