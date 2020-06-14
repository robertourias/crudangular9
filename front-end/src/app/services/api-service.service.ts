import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  caminho = 'http://localhost:86/crudangular9/back-end/';
  // caminho = 'http://hospedarangular-com-br.umbler.net/';
  constructor(private http: HttpClient) {}

  Api(dados: any, api: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    const url = this.caminho + api;
    return this.http
      .post(url, JSON.stringify(dados), httpOptions).pipe(
        map(res => res)
      );
  }
}

