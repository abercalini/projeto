import { HistoricoFilter } from './historicoFilter';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Historico } from './historico';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  urlBase: string;

  constructor(private httpClient: HttpClient) {
    this.urlBase = `${environment.apiUrl}/historico`;
  }

  salvar(descricao: string, usuario: string): Observable<any> {
    return this.httpClient.post<any>(`${this.urlBase}`, JSON.stringify(this.cadastrarHistorico(descricao, usuario)),
      {headers : this.cadastrarHeaders()});
  }

 /* salvarTeste(descricao: string, usuario: string): Observable<string> {
    console.log('Chamou o salvar');
    return this.httpClient.post<string>(`${this.urlBase}`, JSON.stringify(this.cadastrarHistorico(descricao, usuario)),
      {headers : this.cadastrarHeaders()}).map(response => response);
  } */

  listar(codigo: any, historicoFilter: HistoricoFilter): Observable<any> {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.httpClient.get<any>(`${this.urlBase}/filtrarporigreja/${codigo}`, {headers, params : this.adicionarParams(historicoFilter)})
      .map(response => response);
  }

  adicionarParams(historicoFilter: HistoricoFilter) {
    let params = new HttpParams();
    if (historicoFilter.usuario) {
      params = params.set('usuario', historicoFilter.usuario);
    }
    return params;
  }

  cadastrarHistorico(descricao: string, usuario: string) {
    const historico = new Historico();
    historico.descricao = descricao;
    historico.usuario = usuario;
    historico.data = new Date();
    historico.igreja.codigo = localStorage.getItem('codigo_igreja');

    return historico;
  }

  cadastrarHeaders() {
   let headers = new HttpHeaders();
   const token = localStorage.getItem('token');

   headers = headers.set('Content-Type', 'application/json');
   headers = headers.set('Authorization', `Bearer ${token}`);
   return headers;
  }
}
