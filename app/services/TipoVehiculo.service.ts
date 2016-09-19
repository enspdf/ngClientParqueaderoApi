import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TipoVehiculoService {
    private _tipoVehiculoUrl : string = "http://shackox.apphb.com/api/TipoVehiculos/";

    constructor(private _http : Http) {

    }

    getTiposVehiculo() {
        return this._http.get(this._tipoVehiculoUrl)
            .map(res => res.json());
    }

    getTipoVehiculoById(idTipo : number) {
        return this._http.get(this._tipoVehiculoUrl + idTipo)
            .map(res => res.json());
    }

    saveTipoVehiculo(clase : string) {
        let body = JSON.stringify({"clase" : clase});
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers : headers, method : "POST"});

        return this._http.post(this._tipoVehiculoUrl, body, options) 
            .map(res => res.json());
    }

    updateTipoVehiculo(idTipo : number, clase : string) {
        let body = JSON.stringify({"idTipo" : idTipo, "clase" :  clase});
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers : headers, method: "PUT"});

        return this._http.put(this._tipoVehiculoUrl + idTipo, body, options);
    }

    deleteTipoVehiculo(idTipo : number) {
        return this._http.delete(this._tipoVehiculoUrl + idTipo)
            .map(res => res.json());
    }
}