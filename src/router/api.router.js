import { Router } from 'express';

import { transactionRouter } from '../modules/transactions/transaction.router.js';

const apiRouter = new Router();

apiRouter.get('/api/health', (req, res) => {
  res.send('ok');
});

apiRouter.use('/api', transactionRouter);

export default apiRouter;
