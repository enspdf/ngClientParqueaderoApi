import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PagoService {
    private _pagoUrl: string = 'http://shackox.apphb.com/api/Pagos/';

    constructor(private _http: Http) {

    }

    getPagos() {
        return this._http.get(this._pagoUrl)
            .map(res => res.json());
    }

    getPagoById(IdPago: number) {
        return this._http.get(this._pagoUrl + IdPago)
            .map(res => res.json());
    }

    savePago(idBahia: number, idVehiculo: number, Tiempo: string, Costo: number, Fecha: Date) {
        let body = JSON.stringify({'idBahia' : idBahia, 'idVehiculo' : idVehiculo, 'Tiempo' : Tiempo, 'Costo' : Costo, 'Fecha' : Fecha});
        let headers  = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'POST'});

        return this._http.post(this._pagoUrl, body, options)
            .map(res => res.json());
    }

    updatePago(IdPago: number, idBahia: number, idVehiculo: number, Tiempo: string, Costo: number, Fecha: Date) {
      let body = JSON.stringify({
        'IdPago': IdPago, 'idBahia': idBahia,
        'idVehiculo': idVehiculo, 'Tiempo': Tiempo, 'Costo': Costo, 'Fecha': Fecha
      });
        let headers  = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'PUT'});

        return this._http.put(this._pagoUrl + IdPago, body, options);
    }

    deletePago(IdPago: number) {
        return this._http.delete(this._pagoUrl + IdPago)
            .map(res => res.json());
    }
}
