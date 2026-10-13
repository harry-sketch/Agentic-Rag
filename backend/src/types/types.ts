import type { Document } from "@langchain/core/documents";
import type { StateAnnotation } from "../graph/state.ts";

export type TStateType = typeof StateAnnotation.State;

export type TDocsType = Document<{
  source: string;
  page: number;
}>[];
