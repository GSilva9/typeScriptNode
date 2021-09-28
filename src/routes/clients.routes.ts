import { Router } from 'express';
import ClientsRepository from '../repositories/ClientsRepository';
import CreateClientsService from '../services/CreateClientsService';

const clientsRouter = Router();
const clientsRepository = new ClientsRepository();

clientsRouter.get('/', (request, response) => {
    response.json(clientsRepository.findAll());
});

clientsRouter.post('/', (request, response) => {
    try {
        const service = new CreateClientsService(clientsRepository);
        const {
            budget,
            code,
            name,
            phone,
            cpf,
            email,
            id,
        } = request.body;
        const cliente = service.execute({
            budget,
            code,
            name,
            phone,
            cpf,
            email,
            id,
        });
        response.status(201).json(cliente);
    } catch (err) {
        return response.status(400).json({ Erro: err.message });
    }
});

clientsRouter.delete('/delete/:code', (request, response) => {
    try {
      const code = parseInt(request.params.code, 10);
      return response.json(clientsRepository.deleteByCode(code));
    } catch (err) {
      return response.status(400).json({ Erro: err.message });
    }
});

clientsRouter.put('/att/:code', (request, response) => {
    try{
      const code = parseInt(request.params.code, 10);
      const name = request.body.name;
      const cpf = request.body.cpf;
      const email = request.body.email;
      const budget = request.body.budget;
      const phone = request.body.phone;
  
      return response.json(clientsRepository.att(name, cpf, email, budget, code, phone))
  
    } catch (err) {
      return response.status(400).json({ Erro: err.message });
    }
  });
export default clientsRouter;
