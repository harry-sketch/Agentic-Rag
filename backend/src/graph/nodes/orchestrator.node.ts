import { SystemMessage, trimMessages } from "@langchain/core/messages";
import type { TStateType } from "../../../types/types.ts";
import { groqModel } from "../../llm/groq.model.ts";
import {
  CATEGORIZATION_HUMAN_PROMPT,
  CATEGORIZATION_SYSTEM_PROMPT,
  SYSTEM_PROMPT,
} from "../../prompts/index.ts";

export const orchestratorNode = async (state: TStateType) => {
  const recentMessages = await trimMessages(state.messages, {
    maxTokens: 6,
    tokenCounter: (msg) => msg.length,
    startOn: "human",
    strategy: "last",
  });

  const finalResp = await groqModel.invoke([
    new SystemMessage(SYSTEM_PROMPT),
    ...recentMessages,
  ]);

  const categorizationResp = await groqModel.invoke(
    [
      new SystemMessage(CATEGORIZATION_SYSTEM_PROMPT),
      ...state.messages,
      { role: "human", content: CATEGORIZATION_HUMAN_PROMPT },
    ],
    {
      response_format: {
        type: "json_object",
      },
    },
  );

  const nextRepresentative = JSON.parse(
    categorizationResp.content as string,
  ).nextRepresentative;

  console.log({ nextRepresentative, finalResp });

  return {
    message: [finalResp],
    nextRepresentative,
  };
};
