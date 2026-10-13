import "dotenv/config";
import { runAgent } from "./src/graph/run.ts";

const main = async () => {
  await runAgent();
};

main();
