import { z } from "zod";

const productScheme = z.object({
  name: z.string().min(3),
  price: z.number(),
});

export default productScheme;
