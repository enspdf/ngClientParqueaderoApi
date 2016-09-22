import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TarifaService {
    private _tarifaUrl: string = 'http://shackox.apphb.com/api/Tarifas/';

    constructor(private _http: Http) {

    }

    getTarifas() {
        return this._http.get(this._tarifaUrl)
            .map(res => res.json());
    }

    getTarifaById(idTarifa: number) {
        return this._http.get(this._tarifaUrl + idTarifa)
            .map(res => res.json());
    }

    saveTarifa(idTipo: number, Costo: number) {
        let body = JSON.stringify({'idTipo' : idTipo, 'Costo' : Costo});
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'POST'});

        return this._http.post(this._tarifaUrl, body, options)
            .map(res => res.json());
    }

    updateTarifa(idTarifa: number, idTipo: number, Costo: number) {
        let body = JSON.stringify({'idTarifa' : idTarifa, 'idTipo' : idTipo, 'Costo' : Costo});
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'PUT'});

        return this._http.put(this._tarifaUrl + idTarifa, body, options);
    }

    deleteTarifa(idTarifa: number) {
        return this._http.delete(this._tarifaUrl + idTarifa)
            .map(res => res.json());
    }
}
