import 'dotenv/config';

import './modules/transactions/TransactionRepository.js';
import './modules/transactions/TransactionService.js';

import app from './app.js';

const port = process.env.PORT || 4433;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
