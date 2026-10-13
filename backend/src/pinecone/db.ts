import { PineconeStore } from "@langchain/pinecone";
import { embeddingModel } from "../llm/embedding.model.ts";
import { pineconeIndex } from "./pinecone.client.ts";

export const vectorStore = new PineconeStore(embeddingModel, {
  maxConcurrency: 5,
  pineconeIndex,
});
