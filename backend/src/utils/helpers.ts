import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import type { TDocsType } from "../types/types.ts";

export const getSplittedTexts = async (docs: TDocsType) => {
  const splittedText = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  try {
    const allSplittedText = await splittedText.splitDocuments(docs);

    return allSplittedText;
  } catch (error) {
    console.log("Something went wrong while splitting docs into text", error);
  }
};
