import { prisma } from "../../database";
import { carCreateMock, invalidCarMock } from "../__mocks__/cars.mocks";
import { carDefaultExpects } from "../utils/carsDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: create car", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });
  test("should be able to create a car successfully", async () => {
    const data = await request
      .post("/cars")
      .send(carCreateMock)
      .expect(201)
      .then((response) => response.body);

    carDefaultExpects(data, carCreateMock);
  });

  test("should throw error when try to create cars with invalid body", async () => {
    await request.post("/cars").send(invalidCarMock).expect(400);
  });
});
