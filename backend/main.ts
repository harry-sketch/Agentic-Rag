import "dotenv/config";
import { runWorkflow } from "./src/graph/run.ts";

console.log("Hello via Bun!");

const main = async () => {
  await runWorkflow();
};

main();
