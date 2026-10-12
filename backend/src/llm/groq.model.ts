import { ChatGroq } from "@langchain/groq";

export const groqModel = new ChatGroq({
  model: "openai/gpt-oss-120b",
  maxTokens: 800,
  maxRetries: 6,
  apiKey: process.env.GROQ_API_KEY,
});
