import { Distrito } from './distrito';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/distritos`;
  }

  salvar(distrito: Distrito): Observable<Distrito> {
    return this.httpClient.post<Distrito>(`${this.baseUrl}`, JSON.stringify(distrito), {headers : this.adicionarHeadersSalvar()})
      .map(response => response);
  }

  editar(distrito: Distrito): Observable<Distrito> {
    return this.httpClient.put<Distrito>(`${this.baseUrl}/${distrito.codigo}`,
      JSON.stringify(distrito), {headers: this.adicionarHeadersSalvar()})
      .map(response => response);
  }

  excluir(codigo: number): Observable<Distrito> {
    return this.httpClient.delete<Distrito>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()});
  }

  listarTodos(codigo: any): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/filtrarPorIgreja/${codigo}`, {headers: this.adicionarHeaders()}).map(response => response);
  }

  buscarPorCodigo(codigo: number): Observable<Distrito> {
    return this.httpClient.get<Distrito>(`${this.baseUrl}/${codigo}`, {headers : this.adicionarHeaders()})
      .map(response => response);
  }


  adicionarHeaders() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
  }


  adicionarHeadersSalvar() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${token}`);

    return headers;
  }
}
