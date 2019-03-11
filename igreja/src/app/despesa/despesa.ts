export class Despesa {
  codigo: any;
  fornecedor = new Fornecedor();
  igreja = new Igreja();
  descricao: string;
  centroCusto = new CentroCusto();
  caixa = new Caixa();
  dataVecimento: Date;
  valor: number;
  desconto = 0;
  juros = 0;
  parcelado = false;
  valorTotal: number;
  formaPagamento: string;
  dataPagamento: Date;
  quantidadeParcela: number;
  parcelas: Parcela[] = [];
}

export class Fornecedor {
  codigo: number;
}

export class Igreja {
  codigo: any;
}

export class CentroCusto {
  codigo: number;
}

export class Caixa {
  codigo: number;
}


export class Parcela {
  valor: number;
  numeroParcela: number;
}
