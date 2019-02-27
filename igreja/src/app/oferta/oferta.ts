export class Oferta {
    codigo: number;
    membro = new Membro();
    tipoCulto = new Culto();
    igreja = new Igreja();
    formaDePagamento: string;
    dataDizimo: Date;
    valor: number;
    caixa = new Caixa();
}

export class Membro {
    codigo: number;
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

