import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Dizimo } from './dizimo';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DizimoService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/dizimo`;
  }

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
