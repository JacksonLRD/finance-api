import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  isPending: Boolean,
  date: String,
  type: String,
  repetitions: Number,
  repetitionsType: String,
  observation: String,
  categoryId: Number,
  accountId: Number,
  creditCardId: Number
});

export default transactionSchema;
