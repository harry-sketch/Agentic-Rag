import { StateGraph } from "@langchain/langgraph";
import { learningOrchestrator } from "./nodes/learning.orch.node.ts";
import { marketingOrchetrator } from "./nodes/marketing.orch.node.ts";
import { orchestratorNode } from "./nodes/orchestrator.node.ts";
import { StateAnnotation } from "./state";

const workflow = new StateGraph(StateAnnotation)
  .addNode("orchestrator", orchestratorNode)
  .addNode("marketing-orchestrator", marketingOrchetrator)
  .addNode("learning-orchestrator", learningOrchestrator);

export const app = workflow.compile();
