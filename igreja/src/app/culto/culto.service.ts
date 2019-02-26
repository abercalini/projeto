import { Culto } from './culto';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CultoFilter } from './cultoFilter';

@Injectable({
  providedIn: 'root'
})
export class CultoService {

  baseUrl = 'http://localhost:8080/tipoculto';

  constructor(private httpClient: HttpClient) {}

  salvar(culto: Culto): Observable<Culto> {
    return this.httpClient.post<Culto>(`${this.baseUrl}`, JSON.stringify(culto), {headers: this.adicionarHeadersSalvar()})
      .map(response => response);
  }

  listarTodos(cultoFilter: CultoFilter , codigo: any): Observable<any> {
    
    let params = new HttpParams();

    if(cultoFilter.descricao) {
      params = params.set('descricao', cultoFilter.descricao);
      params = params.set('objetivo', cultoFilter.descricao);
    }

    return this.httpClient.get<any>(`${this.baseUrl}/filtrarporigreja/${codigo}`, {params, headers: this.adicionarHeaders()})
      .map(response => response);
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
