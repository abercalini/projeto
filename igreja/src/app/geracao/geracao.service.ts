import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Geracao } from './geracao';
import { Observable } from 'rxjs';

import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class GeracaoService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/geracao`;
   }

   salvar(gerecao: Geracao): Observable<Geracao> {
     return this.httpClient.post<Geracao>(`${this.baseUrl}`, JSON.stringify(gerecao), {headers: this.adicionarHeadersSalvar()})
      .map(response => response);
   }

   editar(geracao: Geracao): Observable<Geracao> {
     return this.httpClient.put<Geracao>(`${this.baseUrl}/${geracao.codigo}`, JSON.stringify(geracao), {headers: this.adicionarHeadersSalvar()})
        .map(response => response);
   }

   listar(filtro: string, codigo: any): Observable<any> {
    let params = new HttpParams();
    if (filtro) {
      params = params.set('filtro', filtro);
    }
     
     return this.httpClient.get<any>(`${this.baseUrl}/filtrarporigreja/${codigo}`, {params, headers: this.adicionarHeaders()})
      .map(response => response);
   }

   excluir(codigo: number): Observable<any> {
     return this.httpClient.delete<any>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()});
   }

   buscarPorCodigo(codigo: number): Observable<any> {
      return this.httpClient.get<any>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()}).map(response => {
        const geracao = response as Geracao;
        this.converterStringToDate([geracao]);

        return geracao;
      });
   }

   converterStringToDate(geracoes: [Geracao]) {
     for (let geracao of geracoes) {
       if (geracao.data) {
         geracao.data = moment(geracao.data, 'YYYY-MM-DD').toDate();
       }
     }
   }

   adicionarHeadersSalvar(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${token}`);

    return headers;
  }

  adicionarHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    headers = headers.set('Authorization', `Bearer ${token}`);

    return headers;
  }
}
