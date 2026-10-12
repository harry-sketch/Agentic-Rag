import { END, START, StateGraph } from "@langchain/langgraph";
import { learningToolNode, marketingToolNode } from "../tools/index.ts";
import { learningOrch, marketingOrch, routingDecision } from "./edge/index.ts";
import { learningNode } from "./nodes/learning.node";
import { marketingNode } from "./nodes/marketing.node.ts";
import { orchestratorNode } from "./nodes/orchestrator.node.ts";
import { StateAnnotation } from "./state.ts";

const State = new StateGraph(StateAnnotation)
  .addNode("routing-orchestrator", orchestratorNode)
  .addNode("marketing", marketingNode)
  .addNode("learning", learningNode)
  .addNode("marketing-tool", marketingToolNode)
  .addNode("learning-tool", learningToolNode)
  .addEdge(START, "routing-orchestrator")
  .addEdge("marketing-tool", "marketing")
  .addEdge("learning-tool", "learning")
  .addConditionalEdges("routing-orchestrator", routingDecision, {
    learning: "learning",
    marketing: "marketing",
    end: END,
  })
  .addConditionalEdges("marketing", marketingOrch, {
    marketing_tool: "marketing-tool",
    end: END,
  })
  .addConditionalEdges("learning-tool", learningOrch, {
    learning_tool: "learning-tool",
    end: END,
  });

export const app = State.compile();
