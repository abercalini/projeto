export class SituacaoMembro {
    codigo: number;
    situacao: string;
    igreja = new Igreja();
}

export class Igreja {
    codigo: any;
}