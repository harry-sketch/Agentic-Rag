import { SystemMessage } from "@langchain/core/messages";
import { learningAgent } from "../../llm/learning.model.ts";
import { LEARNING_SYSTEM_PROMPT } from "../../prompts/prompts.ts";
import type { TStateType } from "../../types/types.ts";

export const learningOrchestrator = async (state: TStateType) => {
  const history = state.messages;

  if (history.at(-1)?.getType() === "ai") {
    history.slice(0, -1);
  }

  const resp = await learningAgent.invoke([
    new SystemMessage(LEARNING_SYSTEM_PROMPT),
    ...history,
  ]);

  return {
    messages: [resp],
  };
};
