import { CentroCustoFilter } from './centroCustoFilter';
import { CentroCusto } from './centroCusto';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CentroCustoService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/centrocusto`;
  }

  salvar(centroCusto: CentroCusto): Observable<CentroCusto> {
    return this.httpClient.post<CentroCusto>(`${this.baseUrl}`, JSON.stringify(centroCusto), {headers: this.adicionarHeadersSalvar()})
      .map(response => response);
  }

  atualizar(centroCusto: CentroCusto): Observable<CentroCusto> {
    return this.httpClient.put<CentroCusto>(`${this.baseUrl}/${centroCusto.codigo}`, JSON.stringify(centroCusto),
      {headers: this.adicionarHeadersSalvar()}).map(response => response);
  }

  listarTodos(codigo: any, centroCustoFilter: CentroCustoFilter): Observable<any> {
    let params = new HttpParams();
    if (centroCustoFilter.pesquisa) {
      params = params.set('pesquisa', centroCustoFilter.pesquisa);
    }
    return this.httpClient.get<any>(`${this.baseUrl}/filtrarporigreja/${codigo}`,
      {params, headers: this.adicionarHeaders()}).map(response => response);
  }

  excluir(codigo: number): Observable<CentroCusto> {
    return this.httpClient.delete<CentroCusto>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()});
  }

  buscarPorCodigo(codigo: number): Observable<CentroCusto> {
    return this.httpClient.get<CentroCusto>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()})
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
