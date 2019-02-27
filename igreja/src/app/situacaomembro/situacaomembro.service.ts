import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SituacaoMembro } from './situacaomembro';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SituacaomembroService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/situacaomembro`;
  }

  salvar(situacaoMembro: SituacaoMembro): Observable<SituacaoMembro> {
    return this.httpClient.post<SituacaoMembro>(this.baseUrl, JSON.stringify(situacaoMembro), {headers : this.cadastrarHeaders()})
      .map(response => response);
  }

  editar(situacaoMembro: SituacaoMembro): Observable<SituacaoMembro> {
    return this.httpClient.put<SituacaoMembro>(`${this.baseUrl}/${situacaoMembro.codigo}`, JSON.stringify(situacaoMembro),
      {headers : this.cadastrarHeaders()}).map(response => response);
  }

  listarTodos(codigo: any): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/filtrarPorIgreja/${codigo}`, {headers: this.cabecalho()}).map(response => response);
  }

  exluir(codigo: number): Observable<SituacaoMembro> {
    return this.httpClient.delete<SituacaoMembro>(`${this.baseUrl}/${codigo}`, {headers: this.cabecalho()});
  }

  buscarPorCodigo(codigo: number): Observable<SituacaoMembro> {
    return this.httpClient.get<SituacaoMembro>(`${this.baseUrl}/${codigo}`, {headers: this.cabecalho()}).map(response => response);
  }


  cadastrarHeaders() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
   }

   cabecalho() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
   }
}
