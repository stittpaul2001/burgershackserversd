import { request, response } from "express";
import { burgerService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')

    this.router.get('', this.getBurgers)
    this.router.get('/test', this.getTest)
    this.router.post('', this.createBurger)
    this.router.get('/', this.getOneBurger)
    this.router.delete('/:burgerId', this.addBurger)
  }

  //BurgersController

  async getTest(request, response, next) {
    console.log('Test, testing')
    response.send('Test success')
  }

  async getBurgers(request, response, next) {
    try {
      const burgers = await burgerService.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }


  async createBurger(request, response, next) {
    try {
      const burgerData = request.body
      const burger = await burgerService.createBurger(burgerData)
      response.send(burger)
    } catch (error) {
      next(error)

    }
  }

  async getOneBurger(request, response, next) {
    try {
      const burgerId = response.params.burgerId
      console.log('getting', burgerId)
      const burger = await burgerService.getOneBurger(burgerId)
      response.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async addBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      const message = await burgerService.addBurger(burgerId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }
}


