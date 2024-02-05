import { Schema, model } from "mongoose";
const { ObjectId, UUID } = Schema.Types;

export const userSchema = new Schema({
  _id: { type: UUID, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  characters: [{ type: ObjectId, ref: "Character" }],
});
