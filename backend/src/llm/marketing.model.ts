import { marketingTools } from "../tools";
import { groqModel } from "./groq.model";

export const marketingLlm = groqModel.bindTools(marketingTools);
