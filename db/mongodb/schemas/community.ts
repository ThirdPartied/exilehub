import { Schema, model } from "mongoose";
const { ObjectId, UUID } = Schema.Types;

export const communitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  ownerUserId: { type: UUID, ref: "User", required: true },
  moderatorUserIds: [{ type: UUID, ref: "User" }],
  websiteUrl: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
