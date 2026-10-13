import { AIMessage } from "@langchain/core/messages";
import type { TStateType } from "../../types/types.ts";

export const shouldContinue = (state: TStateType) => {
  const nextRepresentative = state.nextRepresentative;

  if (["marketing", "marketingSupport"].includes(nextRepresentative)) {
    return "marketing_team";
  }

  if (["learning", "learningSupport"].includes(nextRepresentative)) {
    return "learning_team";
  }

  if (nextRepresentative === "conversational") {
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
