import { Router } from 'express';
import productRouter from './product.routes';
import clientsroutes from './clients.routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/clients', clientsroutes);

export default routes;
