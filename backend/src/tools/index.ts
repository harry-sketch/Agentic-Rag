import { ToolNode } from "@langchain/langgraph/prebuilt";
import { getMarketingOffers } from "./getMarketingOffers.ts";
import { learningRetrieverTool } from "./learning.tool.ts";

export const marketingTools = [getMarketingOffers];

export const learningTools = [learningRetrieverTool];

export const marketingToolsNode = new ToolNode(marketingTools);

export const learningToolsNode = new ToolNode(learningTools);
