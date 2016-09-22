import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/Cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'cliente',
    template: '',
    providers: [ ClienteService ]
})
export class DeleteClienteComponent implements OnInit {
    id: number;
    result: string;

    constructor(private _clienteService: ClienteService, private _route: ActivatedRoute, private _router: Router) {

    }

    ngOnInit() {
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._clienteService.deletePersona(id)
            .subscribe(result => {
              this.result = result;
              this.redirect();
            });
        });
    }

    redirect() {
        this._router.navigate(['/clientes']);
        this.successDelete();
    }

    successDelete() {
        swal('Eliminado', 'El usuario se ha eliminado correctamente', 'success');
    }
}
