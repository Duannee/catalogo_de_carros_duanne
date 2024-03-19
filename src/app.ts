import "express-async-errors";
import "reflect-metadata";
import express, { Application, json } from "express";
import cors from "cors";
import helmet from "helmet";
import { carsRoute } from "./routes/cars.routes";
import { handleErrors } from "./middlewares/handleErros.middleware";

export const app: Application = express();

app.use(cors());
app.use(helmet());

app.use(json());

app.use("/cars", carsRoute);

app.use(handleErrors);
