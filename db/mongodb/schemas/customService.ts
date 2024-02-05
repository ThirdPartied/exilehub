import { Schema, model } from "mongoose";
const { ObjectId, UUID } = Schema.Types;

export const customServiceSchema = new Schema({
  user: { type: UUID, ref: "User", required: true },
  characterId: { type: String, ref: "Character", required: true },
  league: { type: String, required: true },
  serviceName: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  isSold: { type: Boolean, default: false },
  communityId: { type: ObjectId, required: true },
});
