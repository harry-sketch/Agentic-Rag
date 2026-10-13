import { readFileSync } from "node:fs";
import { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { PDFParse } from "pdf-parse";
import type { TDocsType } from "../types/types.ts";

export const loadDocs = async (path: string) => {
  const parser = new PDFParse({
    data: new Uint8Array(readFileSync(path)),
  });
  try {
    const { pages } = await parser.getText();

    const docs = pages.map(
      ({ num, text }) =>
        new Document({
          pageContent: text,
          metadata: {
            source: path,
            page: num - 1,
          },
        }),
    );

    return docs;
  } catch (error) {
    console.log("Something went wrong while loading documents", error);
  }
};

export const getSplittedTexts = async (docs: TDocsType) => {
  const splittedText = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100,
  });

  try {
    const allSplittedText = await splittedText.splitDocuments(docs);

    return allSplittedText;
  } catch (error) {
    console.log("Something went wrong while splitting docs into text", error);
  }
};

export const config = {
  configurable: {
    thread_id: "1",
  },
};
