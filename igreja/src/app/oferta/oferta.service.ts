import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Oferta } from './oferta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  baseUrl = 'http://localhost:8080/oferta';

  constructor(private httpClient: HttpClient) { }

  salvar(oferta: Oferta): Observable<Oferta> {
    return this.httpClient.post<Oferta>(`${this.baseUrl}`, JSON.stringify(oferta), {headers: this.adicionarHeadersSalvar()})
    .map(response => response);
  }

  adicionarHeadersSalvar() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');

    headers = headers.set('Content-Type','application/json');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return headers;
  }
}
