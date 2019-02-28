import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Oferta } from './oferta';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  baseUrl = 'http://localhost:8080/oferta';

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/oferta`;
  }

  salvar(oferta: Oferta): Observable<Oferta> {
    return this.httpClient.post<Oferta>(`${this.baseUrl}`, JSON.stringify(oferta), {headers: this.adicionarHeadersSalvar()})
    .map(response => response);
  }

  listarTodos(codigo: any): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/filtrarporigreja/${codigo}`, {headers: this.adicionarHeaders()}).map(response => response);
  }

  buscarPorCodigo(codigo: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()}).map(response => response);
  }

  excluir(codigo: number): Observable<Oferta> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()});
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

    headers = headers.set('Content-Type','application/json');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
  }
}
