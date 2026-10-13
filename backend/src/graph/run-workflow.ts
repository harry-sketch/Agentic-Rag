import { writeFileSync } from "node:fs";
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";
import { config } from "../utils/helpers.ts";
import { app } from "./workflow.ts";

export const runWorkflow = async () => {
  const rl = createInterface({
    input: stdin,
    output: stdout,
  });

  const drawableGraphState = await app.getGraphAsync();

  const drawableGraphStateImg = await drawableGraphState.drawMermaidPng();

  const graphStateArrayBuffer = await drawableGraphStateImg.arrayBuffer();

  writeFileSync("./arch.png", new Uint8Array(graphStateArrayBuffer));

  try {
    while (true) {
      const question = await rl.question("You: ");

      if (question.toLowerCase().trim() === "bye") {
        return "Good-Bye";
      }

      const completions = await app.invoke(
        {
          messages: {
            role: "human",
            content: question,
          },
        },
        config,
      );

      const aiMsg =
        completions.messages[completions.messages.length - 1]?.content;

      console.log(`Assistant: ${aiMsg}`);
    }
  } catch (error) {
    console.log("Soemthing wwent wrong", error);
  } finally {
    rl.close();
  }
};
