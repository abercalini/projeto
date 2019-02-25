export class Igreja {
  codigo: number;
  nome: string;
  cnpj: string;
  telefone: string;
  responsavel: string;
  tipoIgreja: string;
  porcentagemContribuicao: string;
  email: string;
  endereco = new Endereco();
}

export class Endereco {
  rua: string;
  numero: string;
  bairro: string;
  estado: string;
  cidade: string;
  cep: string;
}
