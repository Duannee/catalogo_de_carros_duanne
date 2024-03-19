import { prisma } from "../../database";
import {
  carCreateMock,
  invalidIdBodyMock,
  updateCarMock,
} from "../__mocks__/cars.mocks";
import { request } from "../utils/request";

describe("Integration test: Update car", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to update a cars successfully", async () => {
    const car = await prisma.car.create({ data: carCreateMock });

    const data = await request
      .patch(`/cars/${car.id}`)
      .send(updateCarMock)
      .expect(200)
      .then((response) => response.body);

    const updateCar = { ...car, ...updateCarMock };

    expect(data).toStrictEqual(updateCar);
  });

  test("should throw error when car is invalid", async () => {
    await request.patch(`/cars/${invalidIdBodyMock}`).expect(404);
  });
});
