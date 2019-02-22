export class Historico {
  codigo: number;
  descricao: string;
  usuario: string;
  data: Date;
  igreja = new Igreja();
}

export class Igreja {
  codigo: any;
}
