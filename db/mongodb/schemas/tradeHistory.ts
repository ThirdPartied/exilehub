import { Schema, model } from "mongoose";
const { ObjectId, UUID } = Schema.Types;

export const tradeHistorySchema = new Schema({
  sellerUserId: { type: UUID, ref: "User", required: true },
  buyerUserId: { type: UUID, ref: "User", required: true },
  type: { type: String, required: true },
  itemName: { type: String },
  character: { type: String, ref: "Character", required: true },
  league: { type: String, required: true },
  price: { type: Number, required: true },
  isSuccessful: { type: Boolean, default: false },
  communityId: { type: ObjectId, required: true },
  isAccepted: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  isReported: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
