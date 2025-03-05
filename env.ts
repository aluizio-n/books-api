import { z } from "zod";

const envSchema = z.object({
	PORT: z.coerce.number().default(4444),
});

export const env = envSchema.parse(process.env);