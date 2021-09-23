import { uuid } from 'uuidv4';

export default class Product {
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
  }: Omit<Product, 'id'>) {
    this.id = uuid();
    this.budget = budget;
    this.code = code;
    this.cpf = cpf;
    this.email = email;
    this.phone = phone;
    this.name = name;
  }
}
