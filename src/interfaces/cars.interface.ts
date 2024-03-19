import { z } from "zod";
import {
  carCreateSchema,
  carReadSchema,
  carReturnSchema,
  carUpdateSchema,
} from "../schemas/cars.schema";

export type TCarsCreate = z.infer<typeof carCreateSchema>;
export type TCarsUpdate = z.infer<typeof carUpdateSchema>;
export type TCarsRead = z.infer<typeof carReadSchema>;
export type TCarsReturn = z.infer<typeof carReturnSchema>;
