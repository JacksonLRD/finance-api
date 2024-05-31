import inject from '../../decorators/inject.decorator.js';
import * as validators from './transactionValidators.js';

export default class TransactionController {
  @inject('TransactionService')
  #service;

  #validators = validators;

  async create(req, res) {
    const data = await this.#validators.create.validateAsync(req.body);

    await this.#service.create(data);
    res.sendStatus(201);
  }
}
