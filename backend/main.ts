import "dotenv/config";
import { runWorkflow } from "./src/graph/run";

const main = async () => {
  await runWorkflow();
};

main();
