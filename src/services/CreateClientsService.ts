import ClientsRepository from '../repositories/ClientsRepository';
import Clients from '../models/Clients';

export default class CreateClientsService {
    private repository: ClientsRepository;

    constructor(repository: ClientsRepository) {
        this.repository = repository;
    }

    public execute({
        budget,
        code,
        name,
        phone,
        cpf,
        email,
    }: Clients): Clients {
        const clients = this.repository.findByCode(code);
        if (clients) {
            throw Error('Produto já cadastrado');
        } else {
            const p = new Clients({
                budget,
                code,
                name,
                phone,
                cpf,
                email,
            });
            this.repository.save(p);
            return p;
        }
    }
}
