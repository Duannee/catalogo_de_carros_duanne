import { CarServices } from "../../services/cars.services";
import { carMock, updateCarMock } from "../__mocks__/cars.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: update cars", () => {
  test("update cars should work correctly", async () => {
    const carServices = new CarServices();

    const updateCar = { ...carMock, ...updateCarMock };

    prismaMock.car.update.mockResolvedValue(updateCar);

    const data = await carServices.update(updateCarMock.name, updateCarMock);

    expect(data).toStrictEqual(updateCar);
  });
});
