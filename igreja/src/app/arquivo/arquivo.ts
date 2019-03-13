export class Arquivo {
  codigo: number;
  arquivo: BlobPart;
  nomeArquivo: string;
  descricao: string;
  data: Date;
  igreja = new Igreja();
}

export class Igreja {
  codigo: any;
}
