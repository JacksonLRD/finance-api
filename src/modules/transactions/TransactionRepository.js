import injectable from '../../decorators/injectable.decorator';

@injectable()
export default class TransactionRepository {
  #model = {};

  async create(transaction) {
    console.log('created');
  }
}
