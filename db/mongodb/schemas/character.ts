import { Schema, model } from "mongoose";
const { ObjectId, UUID } = Schema.Types;

export const characterSchema = new Schema({
  _id: { type: String, required: true },
  user: { type: UUID, ref: "User", required: true },
  characterName: { type: String, required: true },
  league: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});
