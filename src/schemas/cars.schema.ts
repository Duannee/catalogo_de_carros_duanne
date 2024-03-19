import { z } from "zod";

const carSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  brand: z.string().min(1),
  year: z.number().min(4).positive(),
  km: z.number().min(1).positive(),
});

export const carCreateSchema = carSchema.omit({ id: true });

export const carUpdateSchema = carSchema.omit({ id: true }).partial();

export const carReadSchema = carSchema.array();

export const carReturnSchema = carSchema;
