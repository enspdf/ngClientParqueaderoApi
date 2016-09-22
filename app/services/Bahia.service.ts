import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BahiaService {
    private _bahiaUrl: string = 'http://shackox.apphb.com/api/Bahias/';

    constructor(private _http: Http) {

    }

    getBahias() {
        return this._http.get(this._bahiaUrl)
            .map(res => res.json());
    }

    getBahiaById(IdBahia: number) {
      return this._http.get(this._bahiaUrl + IdBahia)
        .map(res => res.json());
    }

    saveBahia(idParqueadero: number, Disponible: string) {
        let body = JSON.stringify({'idParqueadero' : idParqueadero, 'Disponible' : Disponible});
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'POST'});

        return this._http.post(this._bahiaUrl, body, options)
            .map(res => res.json());
    }

    updateBahia(IdBahia: number, idParqueadero: number, Disponible: string) {
        let body = JSON.stringify({'IdBahia' : IdBahia, 'idParqueadero' : idParqueadero, 'Disponible' : Disponible});
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'PUT'});

        return this._http.put(this._bahiaUrl + IdBahia, body, options);
    }

    deleteBahia(IdBahia: number) {
        return this._http.delete(this._bahiaUrl + IdBahia)
            .map(res => res.json());
    }
}
