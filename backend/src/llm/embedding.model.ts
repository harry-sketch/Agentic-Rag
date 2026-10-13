import { OpenAIEmbeddings } from "@langchain/openai";

export const embeddingModel = new OpenAIEmbeddings({
  apiKey: process.env.OPEN_AI_API_KEY,
  model: "text-embedding-3-small",
});
