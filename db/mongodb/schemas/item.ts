import { Schema, model } from "mongoose";
const { ObjectId, UUID } = Schema.Types;

export const itemSchema = new Schema({
  user: { type: UUID, ref: "User", required: true },
  character: { type: String, ref: "Character", required: true },
  league: { type: String, required: true },
  itemName: { type: String, required: true },
  itemCategory: { type: String, required: true },
  isTradable: { type: Boolean, default: true },
  isSold: { type: Boolean, default: false },
  price: { type: Number, required: true },
});
