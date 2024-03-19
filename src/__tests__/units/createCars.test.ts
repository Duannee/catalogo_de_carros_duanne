import { prisma } from "../../database";
import { CarServices } from "../../services/cars.services";
import { carCreateMock, carMock } from "../__mocks__/cars.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: create Cars", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Create car should work correctly", async () => {
    const carServices = new CarServices();

    prismaMock.car.create.mockResolvedValue(carMock);
    const data = await carServices.create(carCreateMock);

    expect(data).toStrictEqual(carMock);
  });
});
