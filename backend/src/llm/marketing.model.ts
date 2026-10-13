import { marketingTools } from "../tools/index.ts";
import { orchestratorAgent } from "./groq.model.ts";

export const marketingAgent = orchestratorAgent.bindTools(marketingTools);
