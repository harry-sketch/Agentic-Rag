import { SystemMessage, trimMessages } from "@langchain/core/messages";
import type { TStateType } from "../../../types/types.ts";
import { groqModel } from "../../llm/groq.model.ts";
import { SYSTEM_PROMPT } from "../../prompts/index.ts";

export const orchestratorNode = async (state: TStateType) => {
  const recentMsg = await trimMessages(state.messages, {
    maxTokens: 6,
    tokenCounter: (msg) => msg.length,
    startOn: "human",
    strategy: "last",
  });

  const orchresp = await groqModel.invoke([
    new SystemMessage(SYSTEM_PROMPT),
    ...recentMsg,
  ]);
};
