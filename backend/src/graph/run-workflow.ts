import { app } from "./workflow.ts";

export const runWorkflow = async () => {
  try {
    const values = await app.stream({
      messages: {
        role: "human",
        content: "Can i get any discount code ?",
      },
    });

    for await (const value of values) {
      console.log("STEP ---->");
      console.log(value);
      console.log("STEP ---->");
    }
  } catch (error) {
    console.log("Soemthing wwent wrong", error);
  }
};
