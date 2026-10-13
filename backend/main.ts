import "dotenv/config";
import { runWorkflow } from "./src/graph/run-workflow.ts";

const main = async () => {
  await runWorkflow();
};

main();
