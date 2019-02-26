export class Culto {
  codigo: number;
  descricao: string;
  objetivo: string;
  igreja = new Igreja();
}

export class Igreja {
  codigo: any;
}
