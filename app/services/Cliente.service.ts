import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClienteService {
    private _clientesUrl : string = "http://shackox.apphb.com/api/Personas/";

    constructor(private _http : Http) {

    }

    getPersonas() {
        return this._http.get(this._clientesUrl)
            .map(res => res.json());
    }

    getPersonaById(idPersona : number) {
        return this._http.get(this._clientesUrl + idPersona)
            .map(res => res.json());
    }

    savePersona(nombres : string, apellidos : string) {
        let body = JSON.stringify({"nombres" : nombres, "apellidos" : apellidos});
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers : headers, method : "POST"});

        return this._http.post(this._clientesUrl, body, options)
            .map(res => res.json());
    }

    updatePersona(idPersona : number, nombres : string, apellidos : string) {
        let body = JSON.stringify({"idPersona" : idPersona, "nombres" : nombres, "apellidos" : apellidos});
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers : headers, method: "PUT"});

        return this._http.put(this._clientesUrl + idPersona, body, options);
    }

    deletePersona(idPersona : number) {
        return this._http.delete(this._clientesUrl + idPersona)
            .map(res => res.json());
    }
}