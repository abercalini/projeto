import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Entrada } from './entrada';
import { Observable } from 'rxjs';

import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/entrada`;
  }

  salvar(entrada: Entrada): Observable<Entrada> {
    return this.httpClient.post<Entrada>(`${this.baseUrl}`, JSON.stringify(entrada), {headers: this.adicionarHeadersSalvar()})
      .map(response => response);
  }

  listarTodos(codigo: any): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/buscarporigreja/${codigo}`, {headers: this.adicionarHeaders()})
      .map(response => response);
  }

  excluir(codigo: number): Observable<Entrada> {
    return this.httpClient.delete<Entrada>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()});
  }

  buscarPorCodigo(codigo: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()}).map(response => {
      const entrada = response as Entrada;
      this.converterStringToDate([entrada]);

      return entrada;
    });
  }

  converterStringToDate(entradas: [Entrada]) {
    for (const entrada of entradas) {
      if (entrada.dataPagamento) {
        entrada.dataPagamento = moment(entrada.dataPagamento, 'YYYY-MM-DD').toDate();
      }
      if (entrada.dataVencimento) {
        entrada.dataVencimento = moment(entrada.dataVencimento, 'YYYY-MM-DD').toDate();
      }
    }
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



