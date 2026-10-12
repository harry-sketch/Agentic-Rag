import { SystemMessage } from "@langchain/core/messages";
import { learningLlm } from "../../llm/learning.model.ts";
import { LEARNING_SYSTEM_PROMPT } from "../../prompts/index.ts";
import type { TStateType } from "../../types/types.ts";

export const learningNode = async (state: TStateType) => {
  const history = state.messages;

  const aiMsg = history.at(-1)?.getType() === "ai";

  if (aiMsg) {
    history.slice(0, -1);
  }

  const learningResp = await learningLlm.invoke([
    new SystemMessage(LEARNING_SYSTEM_PROMPT),
    ...history,
  ]);

  return {
    message: [learningResp],
  };
};
