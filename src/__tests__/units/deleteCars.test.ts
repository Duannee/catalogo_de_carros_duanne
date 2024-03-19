import { CarServices } from "../../services/cars.services";
import { carMock } from "../__mocks__/cars.mocks";

describe("Unit test: delete cars", () => {
  test("delete cars should work correctly", async () => {
    const carServices = new CarServices();

    await carServices.delete(carMock.id);
  });
});
