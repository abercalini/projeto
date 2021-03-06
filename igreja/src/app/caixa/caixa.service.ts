import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Caixa } from './caixa';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/caixa`;
  }

  salvarOrEditar: boolean;

  salvar(caixa: Caixa): Observable<Caixa> {
    caixa.status = true;
    this.salvarOrEditar = true;
    return this.httpClient.post<Caixa>(`${this.baseUrl}`, JSON.stringify(caixa), {headers : this.adicionarHeadersSalvar()})
      .map(response => response);
  }

  atualizar(codigo: number, status: boolean): Observable<Caixa> {
    this.salvarOrEditar = true;
    return this.httpClient.put<Caixa>(`${this.baseUrl}/${codigo}`, JSON.stringify(status),  {headers: this.adicionarHeadersSalvar()})
      .map(response => response);
  }

  atualizarSaldo(codigo: any, valor: number): Observable<Caixa> {
    this.salvarOrEditar = true;

    return this.httpClient.put<Caixa>(`${this.baseUrl}/atualizarsaldo/${codigo}`,
      JSON.stringify(valor), {headers: this.adicionarHeadersSalvar()});
  }

  atualizarSaldoPropocional(codigo: number, valor: number): Observable<Caixa> {
    this.salvarOrEditar = true;
    return this.httpClient.put<Caixa>(`${this.baseUrl}/atulizarvalorproporcional/${codigo}`,
      JSON.stringify(valor), {headers: this.adicionarHeadersSalvar()}).map(response => response);
  }

  atualizarSaldoExclusao(codigo: any, valor: number): Observable<Caixa> {
    this.salvarOrEditar = true;
    return this.httpClient.put<Caixa>(`${this.baseUrl}/atualizarsaldoexcluir/${codigo}`,
      JSON.stringify(valor), {headers: this.adicionarHeadersSalvar()});
  }

  listarTodos(codigo: any): Observable<any> {
    this.salvarOrEditar = false;
    return this.httpClient.get<any>(`${this.baseUrl}/filtrarporigreja/${codigo}`,
      {headers: this.adicionarHeadersSalvar()}).map(response => response);
  }

  verificarCaixasAbertos(codigo: any): Observable<any> {
    this.salvarOrEditar = false;
    return this.httpClient.get<any>(`${this.baseUrl}/verificarcaixas/${codigo}`,
      {headers: this.adicionarHeadersSalvar()}).map(response => response);
  }

  atualizarSaldoDespesa(codigo: any, valor: number): Observable<Caixa> {
    this.salvarOrEditar = true;
    return this.httpClient.put<Caixa>(`${this.baseUrl}/atualizarsaldodespesa/${codigo}`, JSON.stringify(valor),
      {headers: this.adicionarHeadersSalvar()});
  }



  adicionarHeadersSalvar() {
    let headers = new HttpHeaders();

    const token = localStorage.getItem('token');
    if (this.salvarOrEditar) {
      headers = headers.set('Content-Type', 'application/json');
      headers = headers.set('Authorization', `Bearer ${token}`);
      return headers;
    } else {
      headers = headers.set('Authorization', `Bearer ${token}`);
      return headers;
    }

  }
}
