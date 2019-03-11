export class Arquivo {
  codigo: number;
  arquivo: any[] = [];
  nomeArquivo: string;
  descricao: string;
  data: Date;
  igreja = new Igreja();
}

export class Igreja {
  codigo: any;
}
