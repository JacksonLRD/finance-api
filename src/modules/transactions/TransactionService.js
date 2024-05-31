import inject from '../../decorators/inject.decorator.js';
import injectable from '../../decorators/injectable.decorator.js';

@injectable()
export default class TransactionService {
  @inject('TransactionRepository')
  #repository;

  async create(transaction) {
    return this.#repository.create(transaction);
  }
}
