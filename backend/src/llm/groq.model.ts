import { ChatGroq } from "@langchain/groq";

export const groqModel = new ChatGroq({
  model: "openai/gpt-oss-120b",
  maxRetries: 6,
  maxTokens: 800,
  apiKey: process.env.GROQ_API_KEY,
});
