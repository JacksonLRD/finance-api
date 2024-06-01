import 'dotenv/config';
import './config/dependencies.js';

import app from './app.js';

const port = process.env.PORT || 4433;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
