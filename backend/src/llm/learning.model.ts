import { learningTools } from "../tools/index.ts";
import { groqModel } from "./groq.model";

export const learningLlm = groqModel.bindTools(learningTools);
