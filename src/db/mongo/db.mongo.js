import mongoose from 'mongoose';

export default class DbMongo {
  async connect(url) {
    console.log('Connecting to mongo database...');
    await mongoose.connect(url);
    console.log('Mongo database Connected!');
  }
}
