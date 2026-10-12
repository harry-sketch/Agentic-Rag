import { tool } from "@langchain/core/tools";
import z from "zod/v3";

export const getOffers = tool(
  async () => {
    return JSON.stringify([
      {
        code: "LAUNCH",
        discount_percetage: 30,
      },
    ]);
  },
  {
    name: "offers_query_tool",
    description: "Call this tool to get available offers and discounts.",
    schema: z.object({
      query: z.string().describe(""),
    }),
  },
);
