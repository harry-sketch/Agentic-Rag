import { Pinecone as PineconeClient } from "@pinecone-database/pinecone";

if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX) {
  throw new Error("Missing env Credentials");
}

export const pineconeClient = new PineconeClient({
  apiKey: process.env.PINECONE_API_KEY,
});

export const pineconeIndex = pineconeClient.Index(process.env.PINECONE_INDEX);
