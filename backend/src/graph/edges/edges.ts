import { AIMessage } from "@langchain/core/messages";
import type { TStateType } from "../../types/types.ts";

export const shouldContinue = (state: TStateType) => {
  const nextReprestative = state.nextReprestative;

  if (nextReprestative === "marketing") {
    return "marketing_team";
  }

  if (nextReprestative === "learning") {
    return "learning_team";
  }

  if (nextReprestative === "conversational") {
    return "end";
  }

  return "end";
};

export const shouldContinueforMarketing = (state: TStateType) => {
  const lastMessage = state.messages[state.messages.length - 1];

  if (
    AIMessage.isInstance(lastMessage) &&
    (lastMessage?.tool_calls ?? "")?.length > 0
  ) {
    return "marketing_tool";
  }

  return "end";
};

export const shouldContinueforLearning = (state: TStateType) => {
  const lastMessage = state.messages[state.messages.length - 1];

  if (
    AIMessage.isInstance(lastMessage) &&
    (lastMessage?.tool_calls ?? "")?.length > 0
  ) {
    return "learning_tool";
  }

  return "end";
};
