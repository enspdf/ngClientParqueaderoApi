import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/Cliente.service';
import { Persona } from '../../Interfaces/Persona.interface';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'cliente',
    templateUrl: 'edit.component.html',
    providers: [ ClienteService ]
})
export class EditClienteComponent implements OnInit {
    id: number;
    persona: Persona;

    constructor(private _clienteService: ClienteService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._clienteService.getPersonaById(id)
            .subscribe(result => {
              this.persona = result;
            });
        });
    }

    onSubmit() {
        if (this.persona.nombres == null) {
            this.validatorMessage();
        } if (this.persona.apellidos == null) {
            this.validatorMessage();
        } else {
          this._clienteService.updatePersona(this.persona.idPersona, this.persona.nombres, this.persona.apellidos)
            .subscribe(data => {
              this.redirect();
              this.successUpdate();
            });
        }
    }

    redirect() {
        this._router.navigate(['/clientes']);
    }

    validatorMessage() {
        swal('Oops...', 'Todos los campos son necesarios', 'error');
    }

    successUpdate() {
        swal('Actualizado', 'El usuario ha sido actualizado correctamente', 'success');
    }
}
