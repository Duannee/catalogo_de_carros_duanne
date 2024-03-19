import { Request, Response } from "express";
import { CarServices } from "../services/cars.services";

export class CarsControllers {
  private carServices = new CarServices();

  public create = async (
    { body }: Request,
    res: Response
  ): Promise<Response> => {
    const car = await this.carServices.create(body);

    return res.status(201).json(car);
  };

  public readMany = async (req: Request, res: Response): Promise<Response> => {
    const car = await this.carServices.readMany();

    return res.status(200).json(car);
  };

  public readyOne = async (req: Request, res: Response): Promise<Response> => {
    const car = await this.carServices.readyOne(req.params.id);

    return res.status(200).json(car);
  };

  public update = async (
    { body, params: { id } }: Request,
    res: Response
  ): Promise<Response> => {
    const car = await this.carServices.update(id, body);

    return res.status(200).json(car);
  };

  public delete = async (
    { params: { id } }: Request,
    res: Response
  ): Promise<Response> => {
    await this.carServices.delete(id);

    return res.status(204).json();
  };
}
