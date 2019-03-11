import { Despesa } from './despesa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/despesa`;
  }

  salvar(despesa: Despesa): Observable<Despesa> {
    return this.httpClient.post<Despesa>(`${this.baseUrl}`, JSON.stringify(despesa),
       {headers: this.adicionarHeadersSalvar()}).map(response => response);
  }

  adicionarHeadersSalvar() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${token}`);

    return headers;
  }
}
