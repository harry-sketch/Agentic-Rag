import { END, MemorySaver, START, StateGraph } from "@langchain/langgraph";
import { learningToolsNode, marketingToolsNode } from "../tools/index.ts";
import {
  shouldContinue,
  shouldContinueforLearning,
  shouldContinueforMarketing,
} from "./edges/edges.ts";
import { learningOrchestrator } from "./nodes/learning.orch.node.ts";
import { marketingOrchetrator } from "./nodes/marketing.orch.node.ts";
import { orchestratorNode } from "./nodes/orchestrator.node.ts";
import { StateAnnotation } from "./state";

const checkpointer = new MemorySaver();

const workflow = new StateGraph(StateAnnotation)
  .addNode("orchestrator", orchestratorNode)
  .addNode("marketing_orchestrator", marketingOrchetrator)
  .addNode("learning_orchestrator", learningOrchestrator)
  .addNode("marketing_tool", marketingToolsNode)
  .addNode("learning_tool", learningToolsNode)
  .addEdge(START, "orchestrator")
  .addEdge("marketing_tool", "marketing_orchestrator")
  .addEdge("learning_tool", "learning_orchestrator")
  .addConditionalEdges("orchestrator", shouldContinue, {
    marketing_team: "marketing_orchestrator",
    learning_team: "learning_orchestrator",
    end: END,
  })
  .addConditionalEdges("marketing_orchestrator", shouldContinueforMarketing, {
    marketing_tool: "marketing_tool",
    end: END,
  })
  .addConditionalEdges("learning_orchestrator", shouldContinueforLearning, {
    learning_tool: "learning_tool",
    end: END,
  });

export const app = workflow.compile({
  checkpointer,
});
