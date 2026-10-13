import { SystemMessage } from "@langchain/core/messages";
import { marketingAgent } from "../../llm/marketing.model.ts";
import { MARKETING_SYSTEM_PROMPT } from "../../prompts/prompts.ts";
import type { TStateType } from "../../types/types.ts";

export const marketingOrchetrator = async (state: TStateType) => {
  const history = state.messages;

  if (history.at(-1)?.getType() === "ai") {
    history.slice(0, -1);
  }

  const resp = await marketingAgent.invoke([
    new SystemMessage(MARKETING_SYSTEM_PROMPT),
    ...history,
  ]);

  return {
    messages: [resp],
  };
};
