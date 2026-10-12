import { app } from "./workflow.ts";

export const runWorkflow = async () => {
  try {
    const stream = await app.stream({
      messages: [
        {
          role: "human",
          content: "Can i get any discount code ?",
        },
      ],
    });
    for await (const value of stream) {
      console.log("--- STEP ---");
      console.log(value);
      console.log("--- STEP ---");
    }
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
