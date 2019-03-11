import { VisitanteFilter } from './visitanteFIlter';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Visitante } from './visitante';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/visitantes`;
  }

  salvar(visitante: Visitante): Observable<Visitante> {
    return this.httpClient.post<Visitante>(this.baseUrl, JSON.stringify(visitante), {headers: this.adicionarHeadersSalvar()})
      .map(response => response);
  }

  editar(visitante: Visitante): Observable<Visitante> {
    return this.httpClient.put<Visitante>(`${this.baseUrl}/${visitante.codigo}`, JSON.stringify(visitante)
    , {headers: this.adicionarHeadersSalvar()}).map(response => response);
  }


  excluir(codigo: number): Observable<Visitante> {
    return this.httpClient.delete<Visitante>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()});
  }

  buscarPorCodigo(codigo: number): Observable<Visitante> {
    return this.httpClient.get<Visitante>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()}).map(response => response);
  }

  listarTodos(codigo: any, visitanteFilter: VisitanteFilter): Observable<any> {
    let params = new HttpParams();
    if (visitanteFilter.nome) {
      params = params.set('nome', visitanteFilter.nome);
    }
    return this.httpClient.get<any>(`${this.baseUrl}/filtrarPorIgreja/${codigo}`,
      {params, headers: this.adicionarHeaders()}).map(response => response);
  }

  buscarCep(cep: string): Observable<any> {
    return this.httpClient.get<any>(`https://viacep.com.br/ws/${cep}/json/`).map(response => response);
  }


  adicionarHeadersSalvar() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
  }

  adicionarHeaders() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
  }
}
