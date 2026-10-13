import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import type { TDocsType } from "../types/types.ts";

export const getTextSplit = async (docs: TDocsType) => {
  const splittedText = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const allSplittedText = await splittedText.splitDocuments(docs);

  return allSplittedText;
};
