export class Dizimo {
    codigo: number;
    membro = new Membro();
    tipoCulto = new TipoCulto();
    igreja = new Igreja();
    formaDePagamento: string;
    valor: number;
}

export class Membro {
    codigo: number;
}

export class TipoCulto {
    codigo: number;
}

export class Igreja {
    codigo: any;
}