import { tool } from "@langchain/core/tools";

export const getMarketingOffers = tool(
  () => {
    return JSON.stringify([{ code: "Launch", discount: 30 }]);
  },
  {
    name: "offers_query_tool",
    description: "Call this tool to get the available discounts and offers",
  },
);
