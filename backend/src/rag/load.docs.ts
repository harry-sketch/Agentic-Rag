import { readFileSync } from "node:fs";
import { Document } from "@langchain/core/documents";
import { PDFParse } from "pdf-parse";

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
