import Clients from '../models/Clients';

export default class ClientsRepository {
  private client: Array<Clients>;

  constructor() {
    this.client = [];
  }

  public findAll(): Array<Clients> {
    return this.client;
  }

  public findByCode(code: number): Clients | undefined {
    return this.client.find(v => v.code === code);
  }

  public save({
    budget,
    code,
    name,
    phone,
    cpf,
    email,
  }: Clients): Clients {
    const clients = new Clients({
        budget,
        code,
        name,
        phone,
        cpf,
        email,
    });
    this.client.push(clients);
    return clients;
  }
}
