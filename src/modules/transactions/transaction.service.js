import inject from '../../decorators/dependency-injection/inject.decorator.js';
import injectable from '../../decorators/dependency-injection/injectable.decorator.js';

@injectable()
export default class TransactionService {
  @inject('TransactionModel')
  #model;

  async create(transaction) {
    return this.#model.create(transaction);
  }
}
