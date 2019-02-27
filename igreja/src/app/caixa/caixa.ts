export class Caixa {
    codigo: number;
    nome: string;
    dataFechamento: Date;
    dataAbertura: Date;
    status = false;
    valorReceita = 0;
    valorDespesas = 0;
    saldoFechamento = 0;
    saldoAbertura = 0;
    igreja = new Igreja();
}

export class Igreja {
    codigo: any;
}


