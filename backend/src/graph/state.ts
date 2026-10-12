import { Annotation, MessagesAnnotation } from "@langchain/langgraph";
import type { TnextRepresentativeType } from "../../types/types.ts";

export const StateAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec,
  nextRepresentative: Annotation<TnextRepresentativeType>,
});
