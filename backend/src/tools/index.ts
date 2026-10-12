import { ToolNode } from "@langchain/langgraph/prebuilt";
import { getLearning } from "./learning.tool.ts";
import { getOffers } from "./marketing.tool.ts";

export const marketingTools = [getOffers];
export const learningTools = [getLearning];

export const marketingToolNode = new ToolNode(marketingTools);

export const learningToolNode = new ToolNode(learningTools);
