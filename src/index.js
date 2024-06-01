import 'dotenv/config';
import './config/dependencies.js';

import app from './app.js';
import DbMongo from './db/mongo/db.mongo';

const port = process.env.PORT || 4433;
const mongoUrl = process.env.MONGO_URL;

(async () => {
  const dbMongo = new DbMongo();
  await dbMongo.connect(mongoUrl);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
