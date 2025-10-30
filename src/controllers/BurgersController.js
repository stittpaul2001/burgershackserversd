import { request, response } from "express";
import { burgerService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')

    this.router.get('', this.getBurgers) //NOTE - step one
    this.router.get('/test', this.getTest)
    this.router.post('', this.createBurger) //NOTE - step two
    this.router.get('/', this.getOneBurger)
    this.router.delete('/:burgerId', this.addBurger)
  }

  //BurgersController

  /**
 * Creates a new value from request body and returns the value
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */

  //NOTE - should show in the terminal on visual studio and not in our console.
  async getTest(request, response, next) {
    console.log('Test, testing')
    response.send('Test success')

  }

  /**
 * Creates a new value from request body and returns the value
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */

  //NOTE - getting burgers loaded onto the server/ with adding above to the router.this.getBurgers making it run.Then declaring it to my services.

  async getBurgers(request, response, next) {
    try {
      const burgers = await burgerService.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  /**
 * Creates a new value from request body and returns the value
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */

  //NOTE - step two

  async createBurger(request, response, next) {
    try {
      const burgerData = request.body
      const burger = await burgerService.createBurger(burgerData)
      response.send(burger)
    } catch (error) {
      next(error)

    }
  }

  /**
 * Creates a new value from request body and returns the value
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */


  async getOneBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      console.log('getting', burgerId)
      const burger = await burgerService.getOneBurger(burgerId)
      response.send(burger)
    } catch (error) {
      next(error)
    }
  }

  /**
 * Creates a new value from request body and returns the value
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */

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


