import { SystemMessage } from "@langchain/core/messages";
import { marketingLlm } from "../../llm/marketing.model.ts";
import { MARKETING_SYSTEM_PROMPT } from "../../prompts/index.ts";
import type { TStateType } from "../../types/types.ts";

export const marketingNode = async (state: TStateType) => {
  const history = state.messages;

  const aiMsg = history.at(-1)?.getType() === "ai";

  if (aiMsg) {
    history.slice(0, -1);
  }

  const marketingResp = await marketingLlm.invoke([
    new SystemMessage(MARKETING_SYSTEM_PROMPT),
    ...history,
  ]);

  return {
    messages: [marketingResp],
  };
};
