import { vectorStore } from "./db.ts";

export const retriever = vectorStore.asRetriever();
