import { tool } from "@langchain/core/tools";

export const getLearning = tool(
  async () => {
    return JSON.stringify([
      {
        message: "You should join ai agentic course",
      },
    ]);
  },
  {
    name: "",
    description: "",
  },
);
