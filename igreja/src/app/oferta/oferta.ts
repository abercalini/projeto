export class Oferta {
    codigo: number;
    tipoCulto = new Culto();
    igreja = new Igreja();
    formaDePagamento: string;
    dataDizimo: Date;
    valor: number;
    caixa = new Caixa();
    tipoOferta: string;
    observacao: string;
	conferente1: string;
	conferente2: string;
}

export class Culto {
    codigo: number;
}

export class Igreja {
    codigo: any;
}

export class Caixa {
    codigo: any;
}

