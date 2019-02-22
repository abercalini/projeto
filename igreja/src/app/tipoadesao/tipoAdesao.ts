export class TipoAdesao {
    codigo: number;
    nome: string;
    igreja = new Igreja();
}

export class Igreja {
    codigo: any;
}