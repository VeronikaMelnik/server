import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  static async createNewUser(req: Request, res: Response, next: NextFunction){
    try {
      const {name, email, password} = req.body
      const message = await UserService.createNewUser({name, email, password})
      res.status(200).json(message);
    } catch (e) {
      next(e)
    }
  }

  static async loginUser(req: Request, res: Response, next: NextFunction){
    try {
      const {email, password} = req.body
      const message = UserService.loginUser({email,password})
      res.status(200).json(message);
    } catch (e) {
      next(e)
    }
  }
}