import { ArquivoPesquisaComponent } from './../arquivo/arquivo-pesquisa/arquivo-pesquisa.component';
import { ArquivoCadastroComponent } from './../arquivo/arquivo-cadastro/arquivo-cadastro.component';
import { DespesaCadastroComponent } from './../despesa/despesa-cadastro/despesa-cadastro.component';
import { CentroCustoPesquisaComponent } from './../centro-custo/centro-custo-pesquisa/centro-custo-pesquisa.component';
import { CentroCustoCadastroComponent } from './../centro-custo/centro-custo-cadastro/centro-custo-cadastro.component';
import { CultoCadastroComponent } from './../culto/culto-cadastro/culto-cadastro.component';
import { VisitantePesquisaComponent } from './../visitante/visitante-pesquisa/visitante-pesquisa.component';
import { MembroPesquisaComponent } from './../membro/membro-pesquisa/membro-pesquisa.component';
import { MembroCadastroComponent } from './../membro/membro-cadastro/membro-cadastro.component';
import { CargoministroCadastroComponent } from './../cargoministro/cargoministro-cadastro/cargoministro-cadastro.component';
import { IgrejaPesquisaComponent } from './../igreja/igreja-pesquisa/igreja-pesquisa.component';
import { IgrejaCadastroComponent } from '../igreja/igreja-cadastro/igreja-cadastro.component';
import { DistricoCadastroComponent } from '../distrito/districo-cadastro/districo-cadastro.component';
import { DistricoPesquisaComponent } from './../distrito/districo-pesquisa/districo-pesquisa.component';
import { FornecedorPesquisaComponent } from './../fornecedor/fornecedor-pesquisa/fornecedor-pesquisa.component';
import { FornecedorCadastroComponent } from './../fornecedor/fornecedor-cadastro/fornecedor-cadastro.component';
import { HistoricoPesquisaComponent } from './../historico/historico-pesquisa/historico-pesquisa.component';
import { PaginaNaoEncontradaComponent } from './../pagina-nao-encontrada/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoginComponent } from './../seguranca/login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CargoministroPesquisaComponent } from '../cargoministro/cargoministro-pesquisa/cargoministro-pesquisa.component';
import { SituacaomembroCadastroComponent } from '../situacaomembro/situacaomembro-cadastro/situacaomembro-cadastro.component';
import { SituacaomembroPesquisaComponent } from '../situacaomembro/situacaomembro-pesquisa/situacaomembro-pesquisa.component';
import { TipoadesaoCadastroComponent } from '../tipoadesao/tipoadesao-cadastro/tipoadesao-cadastro.component';
import { TipoadesaoPesquisaComponent } from '../tipoadesao/tipoadesao-pesquisa/tipoadesao-pesquisa.component';
import { FuncaomembroCadastroComponent } from '../funcaomembro/funcaomembro-cadastro/funcaomembro-cadastro.component';
import { FuncaomembroPesquisaComponent } from '../funcaomembro/funcaomembro-pesquisa/funcaomembro-pesquisa.component';
import { VisitanteCadastroComponent } from '../visitante/visitante-cadastro/visitante-cadastro.component';
import { NaoAutorizadoComponent } from '../nao-autorizado/nao-autorizado/nao-autorizado.component';
import { EscolherIgrejaComponent } from '../escolher-igreja/escolher-igreja/escolher-igreja.component';
import { CaixaCadastroComponent } from '../caixa/caixa-cadastro/caixa-cadastro.component';
import { CaixaPesquisaComponent } from '../caixa/caixa-pesquisa/caixa-pesquisa.component';
import { CultoPesquisaComponent } from '../culto/culto-pesquisa/culto-pesquisa.component';
import { DizimoCadastroComponent } from '../dizimo/dizimo-cadastro/dizimo-cadastro.component';
import { DizimoPesquisaComponent } from '../dizimo/dizimo-pesquisa/dizimo-pesquisa.component';
import { OfertaCadastroComponent } from '../oferta/oferta-cadastro/oferta-cadastro.component';
import { OfertaPesquisaComponent } from '../oferta/oferta-pesquisa/oferta-pesquisa.component';
import { DashbordInicialComponent } from '../dashbord/dashbord-inicial/dashbord-inicial.component';
import { TiporeceitaCadastroComponent } from '../tiporeceita/tiporeceita-cadastro/tiporeceita-cadastro.component';
import { TiporeceitaPesquisaComponent } from '../tiporeceita/tiporeceita-pesquisa/tiporeceita-pesquisa.component';
import { EntradaCadastroComponent } from '../entrada/entrada-cadastro/entrada-cadastro.component';
import { EntradaPesquisaComponent } from '../entrada/entrada-pesquisa/entrada-pesquisa.component';
import { ReuniaoCadastroComponent } from '../reuniao/reuniao-cadastro/reuniao-cadastro.component';
import { GeracaoCadastroComponent } from '../geracao/geracao-cadastro/geracao-cadastro.component';
import { GeracaoPesquisaComponent } from '../geracao/geracao-pesquisa/geracao-pesquisa.component';

const router: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'fornecedor/novo', component: FornecedorCadastroComponent},
  {path: 'fornecedor', component: FornecedorPesquisaComponent},
  {path: 'fornecedor/:codigo', component: FornecedorCadastroComponent},

  {path: 'distrito/novo', component: DistricoCadastroComponent},
  {path: 'distrito', component: DistricoPesquisaComponent},
  {path: 'distrito/:codigo', component: DistricoCadastroComponent},

  {path: 'igreja/novo', component: IgrejaCadastroComponent},
  {path: 'igreja', component: IgrejaPesquisaComponent},
  {path: 'igreja/:codigo', component: IgrejaCadastroComponent},

  {path: 'cargoministro/novo', component: CargoministroCadastroComponent},
  {path: 'cargoministro', component: CargoministroPesquisaComponent},
  {path: 'cargoministro/:codigo', component: CargoministroCadastroComponent},

  {path: 'situacaomembro/novo', component: SituacaomembroCadastroComponent},
  {path: 'situacaomembro', component: SituacaomembroPesquisaComponent},
  {path: 'situacaomembro/:codigo', component: SituacaomembroCadastroComponent},

  {path: 'tipoadesao/novo', component: TipoadesaoCadastroComponent},
  {path: 'tipoadesao', component: TipoadesaoPesquisaComponent},
  {path: 'tipoadesao/:codigo', component: TipoadesaoCadastroComponent},

  {path: 'funcaomembro/novo', component: FuncaomembroCadastroComponent},
  {path: 'funcaomembro', component: FuncaomembroPesquisaComponent},
  {path: 'funcaomembro/:codigo', component: FuncaomembroCadastroComponent},

  {path : 'membro/novo', component: MembroCadastroComponent},
  {path: 'membro', component: MembroPesquisaComponent},
  {path : 'membro/:codigo', component: MembroCadastroComponent},

  {path: 'visitante/novo', component: VisitanteCadastroComponent},
  {path: 'visitante', component: VisitantePesquisaComponent},
  {path: 'visitante/:codigo', component: VisitanteCadastroComponent},

  {path: 'escolherigreja', component: EscolherIgrejaComponent},

  {path: 'historico', component: HistoricoPesquisaComponent},

  {path: 'caixa/novo', component: CaixaCadastroComponent},
  {path: 'caixa', component: CaixaPesquisaComponent},

  {path: 'culto/novo', component: CultoCadastroComponent},
  {path: 'culto', component: CultoPesquisaComponent},
  {path: 'culto/:codigo', component: CultoCadastroComponent},

  {path: 'dizimo/novo', component: DizimoCadastroComponent},
  {path: 'dizimo', component: DizimoPesquisaComponent},

  {path: 'oferta/novo', component: OfertaCadastroComponent},
  {path: 'oferta', component: OfertaPesquisaComponent},

  {path: 'centrocusto/novo', component: CentroCustoCadastroComponent},
  {path: 'centrocusto', component: CentroCustoPesquisaComponent},
  {path: 'centrocusto/:codigo', component: CentroCustoCadastroComponent},

  {path: 'despesa/novo', component: DespesaCadastroComponent},

  {path: 'receita/novo', component: TiporeceitaCadastroComponent},
  {path: 'receita/:codigo', component: TiporeceitaCadastroComponent},
  {path: 'receita', component: TiporeceitaPesquisaComponent},

  {path: 'entrada/novo', component: EntradaCadastroComponent},
  {path: 'entrada', component: EntradaPesquisaComponent},
  {path: 'entrada/:codigo', component: EntradaCadastroComponent},

  {path: 'arquivo/novo', component: ArquivoCadastroComponent},
  {path: 'arquivo', component: ArquivoPesquisaComponent},

  {path: 'reuniao', component: ReuniaoCadastroComponent},

  {path: 'geracao/novo', component: GeracaoCadastroComponent},
  {path: 'geracao/:codigo', component: GeracaoCadastroComponent},
  {path: 'geracao', component: GeracaoPesquisaComponent},
  
  {path: 'dashbord', component: DashbordInicialComponent},

  {path: 'naoautorizado', component: NaoAutorizadoComponent},
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'pagina-nao-encontrada', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router),
  ],
  exports: [RouterModule]
})
export class NavegacaoModule { }
