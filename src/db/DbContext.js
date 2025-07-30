import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { BurgerSchema } from '../models/Burger.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);


  Burgers = mongoose.model('Burger', BurgerSchema)

}

export const dbContext = new DbContext()
