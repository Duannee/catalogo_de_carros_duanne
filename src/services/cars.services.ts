import { prisma } from "../database";
import {
  TCarsCreate,
  TCarsReturn,
  TCarsUpdate,
} from "../interfaces/cars.interface";
import { carReturnSchema } from "../schemas/cars.schema";

export class CarServices {
  public create = async (body: TCarsCreate): Promise<TCarsReturn> => {
    const data = await prisma.car.create({ data: body });
    return carReturnSchema.parse(data);
  };

  public readMany = async (): Promise<TCarsReturn[]> => {
    const data = await prisma.car.findMany();
    return carReturnSchema.array().parse(data);
  };

  public readyOne = async (id: string): Promise<TCarsReturn> => {
    const data = await prisma.car.findFirst({ where: { id } });
    return carReturnSchema.parse(data);
  };

  public update = async (
    id: string,
    body: TCarsUpdate
  ): Promise<TCarsReturn> => {
    const data = await prisma.car.update({ where: { id }, data: body });
    return carReturnSchema.parse(data);
  };

  public delete = async (id: string): Promise<void> => {
    await prisma.car.delete({ where: { id } });
  };
}
