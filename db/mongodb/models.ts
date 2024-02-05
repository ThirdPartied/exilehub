import { model } from "mongoose";
import { userSchema } from "./schemas/user";
import { characterSchema } from "./schemas/character";
import { communitySchema } from "./schemas/community";
import { customServiceSchema } from "./schemas/customService";
import { itemSchema } from "./schemas/item";
import { tradeHistorySchema } from "./schemas/tradeHistory";
import { reputationSchema } from "./schemas/reputation";

export const models = {
  User: model("User", userSchema),
  Character: model("Character", characterSchema),
  Community: model("Community", communitySchema),
  CustomService: model("CustomService", customServiceSchema),
  Item: model("Item", itemSchema),
  TradeHistory: model("TradeHistory", tradeHistorySchema),
  Reputation: model("Reputation", reputationSchema),
};
