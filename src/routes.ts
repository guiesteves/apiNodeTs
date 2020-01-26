import {Router} from 'express';

import UserController from './Controllers/UserController';


// eslint-disable-next-line new-cap
const routes = Router();

routes.get('/users', UserController.index);
routes.post('/user', UserController.store);

export default routes;
