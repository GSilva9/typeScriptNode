import { uuid } from 'uuidv4';

export default class Clients {
  id: string;

  code: number;

  name: string;

  budget: number;

  cpf: number;

  email: string;

  phone: number;

  constructor({
    budget,
    code,
    name,
    phone,
    cpf,
    email,
  }: Omit<Clients, 'id'>) {
    this.id = uuid();
    this.budget = budget;
    this.code = code;
    this.cpf = cpf;
    this.email = email;
    this.phone = phone;
    this.name = name;
  }
}
