import mongoose from 'mongoose';
import transactionSchema from '../schemas/transaction.schema.js';
import injectable from '../../../decorators/dependency-injection/injectable.decorator';

@injectable()
export default class TransactionModel {
  #model;

  constructor() {
    this.#model = mongoose.model('Transaction', transactionSchema);
  }

  async create(transaction) {
    return this.#model.create(transaction);
  }

  async getById(id) {
    return this.#model.findOne({ _id: id });
  }
}
