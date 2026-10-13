import { SystemMessage, trimMessages } from "@langchain/core/messages";
import { orchestratorAgent } from "../../llm/groq.model.ts";
import {
  CATEGORIZATION_HUMAN_PROMPT,
  CATEGORIZATION_SYSTEM_PROMPT,
  SYSTEM_PROMPT,
} from "../../prompts/prompts.ts";
import type { TStateType } from "../../types/types.ts";

export const orchestratorNode = async (state: TStateType) => {
  const history = await trimMessages(state.messages, {
    maxTokens: 6,
    tokenCounter: (msg) => msg.length,
    startOn: "human",
    strategy: "last",
  });

  const finalResp = await orchestratorAgent.invoke([
    new SystemMessage(SYSTEM_PROMPT),
    ...history,
  ]);

  const categorisationResp = await orchestratorAgent.invoke(
    [
      new SystemMessage(CATEGORIZATION_SYSTEM_PROMPT),
      ...history,
      finalResp,
      {
        role: "human",
        content: CATEGORIZATION_HUMAN_PROMPT,
      },
    ],
    {
      response_format: {
        type: "json_object",
      },
    },
  );

  const nextRepresentative = await JSON.parse(
    categorisationResp.content as string,
  ).nextRepresentative;

  return {
    message: [finalResp],
    nextRepresentative,
  };
};
