import { log } from 'util';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Arquivo } from './arquivo';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/arquivo`;
  }

  salvar(arquivo: Arquivo): Observable<Arquivo> {
    return this.httpClient.post<Arquivo>(`${this.baseUrl}`, JSON.stringify(arquivo), {headers: this.adicionarHeadersSalvar()})
      .map(response => response);
  }

  listarTodos(codigo: any): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${codigo}`, {headers: this.adicionarHeaders()})
      .map(response => {

        const arquivo = response as Arquivo;

        for (let i = 0; i < response.length; i++) {
          if (arquivo[i].arquivo) {
           arquivo[i].arquivo = new File([arquivo[i].arquivo], arquivo[i].nomeArquivo);
          }
        }

        return arquivo;

      });
  }

  converterBlobToImage(arquivos: [Arquivo]) {
    let contador = 0;
    for (const arquivo of arquivos) {
      console.log(contador);
      contador ++;
    }
  }

  upload(formData: any): Observable<any> {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.httpClient.post<any>(`${this.baseUrl}/upload`, formData, {headers});
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
