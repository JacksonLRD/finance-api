import mongoose from 'mongoose';

export default class DbMongo {
  async connect(uri) {
    console.log('Connecting to mongo database...');
    await mongoose.connect(uri, {
      maxPoolSize: 10,
    });
    console.log('Mongo database Connected!');
  }
}
