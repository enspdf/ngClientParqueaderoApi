import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ParqueaderoService {
    private _parqueaderoUrl: string = 'http://shackox.apphb.com/api/Parqueaderos/';

    constructor(private _http: Http) {

    }

    getParqueaderos() {
        return this._http.get(this._parqueaderoUrl)
            .map(res => res.json());
    }

    getParqueaderoById(IdParqueadero: number) {
        return this._http.get(this._parqueaderoUrl + IdParqueadero)
            .map(res => res.json());
    }

    saveParqueadero(nombre: string) {
        let body = JSON.stringify({'nombre': nombre});
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'POST'});

        return this._http.post(this._parqueaderoUrl, body, options)
            .map(res => res.json());
    }

    updateParqueadero(IdParqueadero: number, nombre: string) {
        let body = JSON.stringify({'IdParqueadero': IdParqueadero, 'nombre': nombre});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'PUT'});

        return this._http.put(this._parqueaderoUrl + IdParqueadero, body, options);
    }

    deleteParqueadero(IdParqueadero: number) {
        return this._http.delete(this._parqueaderoUrl + IdParqueadero)
            .map(res => res.json());
    }
}
