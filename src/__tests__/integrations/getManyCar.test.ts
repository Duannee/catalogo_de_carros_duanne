import { prisma } from "../../database";
import { carCreateListMock } from "../__mocks__/cars.mocks";
import { carDefaultExpects } from "../utils/carsDefaultExpects";
import { request } from "../utils/request";

describe("integration test: get many cars", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("should be able to get many cars successfully", async () => {
    await prisma.car.createMany({ data: carCreateListMock });

    const data = await request
      .get("/cars")
      .expect(200)
      .then((response) => response.body);

    expect(data).toHaveLength(2);

    carDefaultExpects(data[0], carCreateListMock[0]);
    carDefaultExpects(data[1], carCreateListMock[1]);
  });
});
