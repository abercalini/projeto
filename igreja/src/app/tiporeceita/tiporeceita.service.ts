import { TipoEntrada } from './tipoEntrada';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiporeceitaService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/tipoentrada`;
  }

  salvar(tipoEntrada: TipoEntrada): Observable<TipoEntrada> {
    return this.httpClient.post<TipoEntrada>(`${this.baseUrl}`, JSON.stringify(tipoEntrada), {headers: this.adicionarHeadersSalvar()})
      .map(response => response);
  }

  editar(tipoEntrada: TipoEntrada): Observable<TipoEntrada> {
    return this.httpClient.put<TipoEntrada>(`${this.baseUrl}/${tipoEntrada.codigo}`, JSON.stringify(tipoEntrada),
      {headers: this.adicionarHeadersSalvar()}).map(response => response);
  }

  listarTodos(codigo: any, descricaoFilter: string): Observable<any> {
    let params = new HttpParams();
    if (descricaoFilter) {
      params = params.set('descricao', descricaoFilter);
    }
    return this.httpClient.get<any>(`${this.baseUrl}/filtrarporigreja/${codigo}`, {params, headers: this.adicionarHeaders()})
      .map(response => response);
  }

  buscarPorCodigo(codigo: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/buscarporcodigo/${codigo}`, {headers: this.adicionarHeaders()})
      .map(response => response);
  }

  excluir(codigo: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()});
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
