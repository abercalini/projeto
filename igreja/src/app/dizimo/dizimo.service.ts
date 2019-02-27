import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Dizimo } from './dizimo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DizimoService {

  baseUrl = 'http://localhost:8080/dizimo';

  constructor(private httpClient: HttpClient) { }

  salvar(dizimo: Dizimo): Observable<Dizimo> {
    return this.httpClient.post<Dizimo>(`${this.baseUrl}`, JSON.stringify(dizimo), {headers: this.adicionarHeadersSalvar()})
      .map(response => response);
  }

  listarTodos(codigo: any): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()})
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
