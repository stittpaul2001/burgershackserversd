import { dbContext } from "../db/DbContext.js"


class BurgersService {

  async addBurger(burgerId) {
    const addedBurger = await dbContext.Burgers.findById(burgerId)
    if (!addedBurger) {
      throw new Error('There is no burger here. No Id')
    }
    await addedBurger.deleteOne()
    return `${addedBurger.name} has been added to menu ${addedBurger.price}`
  }

  async getOneBurger(burgerId) {
    const burger = await dbContext.Burgers.findById(burgerId)
    if (!burger) throw new console.error(`There is no burger with that Id: ${burgerId}`);

  }


  async createBurger(burgerData) {
    const burger = await dbContext.Burgers.create(burgerData)
    return burger
  }



  async getBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }


}
export const burgerService = new BurgersService()