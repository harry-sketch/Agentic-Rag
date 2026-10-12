import { AIMessage } from "@langchain/core/messages";
import type { TStateType } from "../../../types/types.ts";

export const routingDecision = (state: TStateType) => {
  if (state.nextRepresentative === "learning team") {
    return "learning";
  }

  if (state.nextRepresentative === "marketing team") {
    return "marketing";
  }

  if (state.nextRepresentative === "responding conversationally") {
    return "end";
  }

  return "end";
};

export const marketingOrch = (state: TStateType) => {
  const lastMessage = state.messages[state.messages.length - 1];
  if (
    AIMessage.isInstance(lastMessage) &&
    (lastMessage.tool_calls?.length ?? 0) > 0
  ) {
    return "marketing_tool";
  }

  return "end";
};

export const learningOrch = (state: TStateType) => {
  const lastMessage = state.messages[state.messages.length - 1];

  if (
    AIMessage.isInstance(lastMessage) &&
    (lastMessage.tool_calls?.length ?? 0) > 0
  ) {
    return "learning_tool";
  }

  return "end";
};
