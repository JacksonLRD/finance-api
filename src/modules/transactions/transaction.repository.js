import injectable from '../../decorators/dependency-injection/injectable.decorator';

@injectable()
export default class TransactionRepository {
  #model = {};

  async create(transaction) {
    console.log('created');
  }
}
