import { ToolNode } from "@langchain/langgraph/prebuilt";

export const marketingTools = [];

export const learningTools = [];

export const marketingToolsNode = new ToolNode(marketingTools);

export const learningToolsNode = new ToolNode(learningTools);
