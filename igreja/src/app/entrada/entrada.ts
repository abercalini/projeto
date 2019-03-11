export class Entrada {
  codigo: number;
  descricao: string;
  centroCusto = new CentroCusto();
  caixa = new Caixa();
  tipoEntrada = new TipoEntrada();
  dataPagamento: Date;
  dataVencimento: Date;
  valor = 0;
  desconto = 0;
  juros = 0;
  valorTotal = 0;
  formaPagamento: string;
  parcelado = false;
  quantidadeParcela: number;
  igreja = new Igreja();
  parcelas: Parcelas[] = [];
}

export class Igreja {
  codigo: any;
}

export class TipoEntrada {
  codigo: number;
}

export class Caixa {
  codigo: number;
}

export class CentroCusto {
  codigo: number;
}

export class Parcelas {
  valor: number;
  dataVencimento: Date;
}
