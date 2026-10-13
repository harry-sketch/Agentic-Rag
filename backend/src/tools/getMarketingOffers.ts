import { tool } from "@langchain/core/tools";

export const getMarketingOffers = tool(() => {}, {
  name: "offers_query_tool",
  description: "Call this tool to get the available discounts and offers",
});
