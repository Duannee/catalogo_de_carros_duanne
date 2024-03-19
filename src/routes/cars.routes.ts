import { Router } from "express";
import { CarsControllers } from "../controllers/cars.controllers";
import { ensure } from "../middlewares/ensure.middleware";
import { carCreateSchema, carUpdateSchema } from "../schemas/cars.schema";
import { found } from "../middlewares/foundCars.middleware";

export const carsRoute = Router();

const carsControllers = new CarsControllers();

carsRoute.post("/", ensure.validBody(carCreateSchema), carsControllers.create);

carsRoute.get("/", carsControllers.readMany);

carsRoute.get("/:id", found.foundCars, carsControllers.readyOne);

carsRoute.patch(
  "/:id",
  ensure.validBody(carUpdateSchema),
  found.foundCars,
  carsControllers.update
);

carsRoute.delete("/:id", found.foundCars, carsControllers.delete);
