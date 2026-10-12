import { app } from "./workflow.ts";

export const runWorkflow = async () => {
  try {
    const completions = await app.invoke({
      messages: {
        role: "human",
        content: "",
      },
    });

    console.log(
      `Assistant: ${completions.messages[completions.messages.length - 1]?.content}`,
    );
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
