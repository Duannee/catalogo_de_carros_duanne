import { prisma } from "../../database";
import { carCreateMock, invalidIdBodyMock } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";

describe("Integration test: delete cars", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });
  test("should be able to delete a cars successfully", async () => {
    const car = await prisma.car.create({ data: carCreateMock });

    await request.delete(`/cars/${car.id}`).expect(204);
  });
  test("should throw error when car is invalid", async () => {
    await request.delete(`/cars/${invalidIdBodyMock}`).expect(404);
  });
});
