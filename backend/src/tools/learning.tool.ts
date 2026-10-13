import { createRetrieverTool } from "@langchain/classic/tools/retriever";
import { retriever } from "../pinecone/retriever.ts";

export const learningRetrieverTool = createRetrieverTool(retriever, {
  name: "retrieve_learning_knowledge_base",
  description:
    "Search and return information about syllabus, courses, FAQs, career doubts.",
});
