import { Router } from 'express';

import TransactionController from './transaction.controller.js';

const transactionRouter = new Router();
const controller = new TransactionController();

transactionRouter.post('/transactions', controller.create.bind(controller));

export { transactionRouter };
