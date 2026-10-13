import { learningTools } from "../tools/index.ts";
import { orchestratorAgent } from "./groq.model.ts";

export const learningAgent = orchestratorAgent.bindTools(learningTools);
