import { ToolNode } from "@langchain/langgraph/prebuilt";
import { getMarketingOffers } from "./getMarketingOffers.ts";

export const marketingTools = [getMarketingOffers];

export const learningTools = [];

export const marketingToolsNode = new ToolNode(marketingTools);

export const learningToolsNode = new ToolNode(learningTools);
