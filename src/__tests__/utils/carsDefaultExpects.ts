import { TCarsCreate, TCarsReturn } from "../../interfaces/cars.interface";

export const carDefaultExpects = (data: TCarsReturn, expected: TCarsCreate) => {
  expect(data.id).toBeDefined();
  expect(data.name).toBe(expected.name);
  expect(data.brand).toBe(expected.brand);
  expect(data.year).toBe(expected.year);
  expect(data.km).toBe(expected.km);
  expect(data.description).toBe(expected.description);
};
