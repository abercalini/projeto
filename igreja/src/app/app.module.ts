import { ReuniaoModule } from './reuniao/reuniao.module';
import { ArquivoService } from './arquivo/arquivo.service';
import { ArquivoModule } from './arquivo/arquivo.module';
import { EntradaModule } from './entrada/entrada.module';
import { DespesaModule } from './despesa/despesa.module';
import { CentroCustoService } from './centro-custo/centro-custo.service';
import { CentroCustoModule } from './centro-custo/centro-custo.module';
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
import { DizimoModule } from './dizimo/dizimo.module';
import { VisitanteModule } from './visitante/visitante.module';
import { TiporeceitaModule } from './tiporeceita/tiporeceita.module';
import { ScrollPanelModule } from 'primeng/scrollpanel';


import { AppComponent } from './app.component';
import { AppMenuComponent, AppSubMenuComponent } from './app.menu.component';

import { RefreshTokenInterceptor } from './seguranca/RefreshTokenInterceptor';
import { HttpErrorInterceptor } from './seguranca/HttpErrorInterceptor';

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
import { CultoService } from './culto/culto.service';
import { FuncaomembroService } from './funcaomembro/funcaomembro.service';
import { MembroService } from './membro/membro.service';
import { VisitanteService } from './visitante/visitante.service';
import { CaixaService } from './caixa/caixa.service';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DizimoService } from './dizimo/dizimo.service';
import { OfertaModule } from './oferta/oferta.module';
import { OfertaService } from './oferta/oferta.service';
import { DashbordModule } from './dashbord/dashbord.module';
import { DespesaService } from './despesa/despesa.service';
import { TiporeceitaService } from './tiporeceita/tiporeceita.service';
import { EntradaService } from './entrada/entrada.service';
import { GeracaoModule } from './geracao/geracao.module';
import { GeracaoService } from './geracao/geracao.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppSubMenuComponent,
    AppTopBarComponent,
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
    CultoModule,
    DizimoModule,
    OfertaModule,
    ScrollPanelModule,
    DashbordModule,
    CentroCustoModule,
    DespesaModule,
    TiporeceitaModule,
    EntradaModule,
    ArquivoModule,
    ReuniaoModule,
    GeracaoModule
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
    MembroService, VisitanteService, CaixaService, CultoService, DizimoService, OfertaService, CentroCustoService, DespesaService,
    TiporeceitaService, EntradaService, ArquivoService, GeracaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
