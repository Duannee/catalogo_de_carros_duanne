import { NextFunction, Request, Response } from "express";
import { prisma } from "../database";
import { AppError } from "../errors/AppErrors";

export class FoundCars {
  public async foundCars(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    const car = await prisma.car.findFirst({ where: { id } });

    if (!car) {
      throw new AppError("car not found", 404);
    }
    res.locals = { ...res.locals, car };

    return next();
  }
}

export const found = new FoundCars();
