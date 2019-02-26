import { CultoService } from './culto/culto.service';
import { CultoModule } from './culto/culto.module';
import { AppTopBarComponent } from './app.topbar.component';
import { MembroModule } from './membro/membro.module';
import { FuncaomembroModule } from './funcaomembro/funcaomembro.module';
import { CargoministroModule } from './cargoministro/cargoministro.module';
import { IgrejaModule } from './igreja/igreja.module';
import { DistritoModule } from './distrito/distrito.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { HistoricoModule } from './historico/historico.module';
import { PaginaNaoEncontradaModule } from './pagina-nao-encontrada/pagina-nao-encontrada.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SegurancaModule } from './seguranca/seguranca.module';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TipoadesaoModule } from './tipoadesao/tipoadesao.module';
import { SituacaomembroModule } from './situacaomembro/situacaomembro.module';
import { NaoAutorizadoModule } from './nao-autorizado/nao-autorizado.module';
import { CaixaModule } from './caixa/caixa.module';
import { EscolherIgrejaModule } from './escolher-igreja/escolher-igreja.module';


import { AppComponent } from './app.component';
import { AppMenuComponent, AppSubMenuComponent } from './app.menu.component';

import { ScrollPanel } from 'primeng/primeng';

import { SegurancaService } from './seguranca/seguranca.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MessageService, ConfirmationService } from 'primeng/api';
import { HistoricoService } from './historico/historico.service';
import { FornecedorService } from './fornecedor/fornecedor.service';
import { DistritoService } from './distrito/distrito.service';
import { IgrejaService } from './igreja/igreja.service';
import { CargoministroService } from './cargoministro/cargoministro.service';
import { TipoadesaoService } from './tipoadesao/tipoadesao.service';
import { SituacaomembroService } from './situacaomembro/situacaomembro.service';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FuncaomembroService } from './funcaomembro/funcaomembro.service';
import { MembroService } from './membro/membro.service';
import { VisitanteModule } from './visitante/visitante.module';
import { VisitanteService } from './visitante/visitante.service';
import { RefreshTokenInterceptor } from './seguranca/RefreshTokenInterceptor';
import { HttpErrorInterceptor } from './seguranca/HttpErrorInterceptor';
import { CaixaService } from './caixa/caixa.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ScrollPanel,
    AppMenuComponent,
    AppSubMenuComponent,
    AppTopBarComponent
  ],
  imports: [
    BrowserModule,
    SegurancaModule,
    NavegacaoModule,
    PaginaNaoEncontradaModule,
    HttpClientModule,
    HistoricoModule,
    FornecedorModule,
    DistritoModule,
    IgrejaModule,
    CargoministroModule,
    SituacaomembroModule,
    TipoadesaoModule,
    FuncaomembroModule,
    MembroModule,
    VisitanteModule,
    NaoAutorizadoModule,
    CaixaModule,
    EscolherIgrejaModule,
    CultoModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},

    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },

    SegurancaService, JwtHelperService, MessageService, HistoricoService, FornecedorService, ConfirmationService,
    Title, DistritoService, IgrejaService, CargoministroService, SituacaomembroService, TipoadesaoService, FuncaomembroService,
    MembroService, VisitanteService, CaixaService, CultoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
