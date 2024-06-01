import joi from 'joi';

export const create = joi
  .object({
    amount: joi.number().required(),
    description: joi.string().required(),
    isPending: joi.boolean(),
    date: joi.string().isoDate().required().strict(),
    type: joi.string().valid('income', 'expense').required(),
    repetitions: joi.number(),
    repetitionType: joi.string().valid('daily', 'weekly', 'monthly', 'yearly'),
    observation: joi.string(),
    categoryId: joi.number().required(),
    accountId: joi.number(),
    creditCardId: joi.number(),
  })
  .xor('accountId', 'creditCardId')
  .and('repetitions', 'repetitionType');
