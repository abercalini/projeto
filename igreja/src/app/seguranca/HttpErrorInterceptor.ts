import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';

import { Injectable } from '@angular/core';


   import {MessageService} from 'primeng/api';
   import { Observable, throwError } from 'rxjs';
   import { retry, catchError } from 'rxjs/operators';
import { SegurancaService } from './seguranca.service';
   
   @Injectable()
   export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private messageService: MessageService, private segurancaService: SegurancaService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            console.log(error);
            
            if (error.error.error === 'invalid_grant') {
                errorMessage = 'Senha ou e-mail incorretos';
                this.messageService.add({severity: 'error', detail: errorMessage, summary: errorMessage});
            }
            if (error.error.status === 404) {
                errorMessage = 'Erro ao tentar usar o serviço remoto, página não encontrada';
                this.messageService.add({severity: 'error', detail: errorMessage, summary: errorMessage});
            }

            if (error.error.status === 500 && error.error.exception === 'org.springframework.dao.DataIntegrityViolationException') {
                errorMessage = 'Não pode excluir esse cadastro, pois está sendo movimentada em outra função do sistema';
                this.messageService.add({severity: 'error', detail: errorMessage, summary: errorMessage});
            }

            if (error.error.error === 'invalid_token' && error.error.error_description.includes('Access token expired')) {
                errorMessage = 'Por favor recarregue a página';
                this.messageService.add({severity: 'error', detail: errorMessage, summary: errorMessage});
                this.segurancaService.novoAccessToken().subscribe();
            }
            
            return throwError(errorMessage);
          })
        )
    }
   }