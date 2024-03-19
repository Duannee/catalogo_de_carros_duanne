import { prisma } from "../../database";
import { carCreateMock, invalidIdBodyMock } from "../__mocks__/cars.mocks";
import { carDefaultExpects } from "../utils/carsDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: get one", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });
  test("should be able to get one car successfully", async () => {
    const car = await prisma.car.create({ data: carCreateMock });

    const data = await request
      .get(`/cars/${car.id}`)
      .expect(200)
      .then((response) => response.body);

    carDefaultExpects(data, carCreateMock);
  });
  test("should throw error when car id is invalid", async () => {
    await request.get(`/cars/${invalidIdBodyMock}`).expect(404);
  });
});
