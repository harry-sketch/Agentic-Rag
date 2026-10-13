import path from "node:path";
import { vectorStore } from "../pinecone/db.ts";
import { getSplittedTexts, loadDocs } from "../utils/helpers.ts";

const filePath = path.resolve(import.meta.dirname, "../data/document.pdf");

const rag = async () => {
  try {
    const docs = await loadDocs(filePath);

    if (!docs) {
      return {
        found: false,
        docs,
      };
    }

    const allTexts = await getSplittedTexts(docs);

    if (!allTexts) {
      return {
        found: false,
        allTexts,
      };
    }

    await vectorStore.addDocuments(allTexts);

    console.log("Done");
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

rag();
