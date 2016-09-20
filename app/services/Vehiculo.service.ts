import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehiculoService {
    private _vehiculoUrl : string = "http://shackox.apphb.com/api/Vehiculos/";

    constructor(private _http : Http) {

    }

    getVehiculos() {
        return this._http.get(this._vehiculoUrl)
            .map(res => res.json());
    }

    getVehiculoById(idVehiculo : number) {
        return this._http.get(this._vehiculoUrl + idVehiculo)
            .map(res => res.json());
    }

    saveVehiculo(Marca : string, IdPersona : number, idTipo : number) {
        let body = JSON.stringify({"Marca" : Marca, "IdPersona" : IdPersona, "idTipo" : idTipo});
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers, method: "POST"});

        return this._http.post(this._vehiculoUrl, body, options)
            .map(res => res.json());
    }

    updateVehiculo(idVehiculo : number, Marca : string, IdPersona : number, idTipo : number) {
        let body = JSON.stringify({"idVehiculo" : idVehiculo, "Marca" : Marca, "IdPersona" : IdPersona, "idTipo" : idTipo});
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers, method: "PUT"});

        return this._http.put(this._vehiculoUrl + idVehiculo, body, options);
    }

    deleteVehiculo(idVehiculo : number) {
        return this._http.delete(this._vehiculoUrl + idVehiculo)
            .map(res => res.json());
    }
}