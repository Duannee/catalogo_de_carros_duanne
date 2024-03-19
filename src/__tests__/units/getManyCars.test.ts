import { CarServices } from "../../services/cars.services";
import { getCarsList } from "../__mocks__/cars.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: get many cars", () => {
  test("get many cars should work correctly", async () => {
    const carServices = new CarServices();

    prismaMock.car.findMany.mockResolvedValue(getCarsList);

    const data = await carServices.readMany();

    expect(data).toHaveLength(2);
    expect(data[0]).toStrictEqual(getCarsList[0]);
    expect(data[1]).toStrictEqual(getCarsList[1]);
  });
});
