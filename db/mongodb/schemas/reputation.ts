import { Schema, model } from "mongoose";
const { ObjectId, UUID } = Schema.Types;

export const reputationSchema = new Schema({
  user: { type: UUID, ref: "User", required: true },
  communityReputation: [
    {
      communityId: { type: ObjectId, ref: "Community", required: true },
      communityName: { type: String, require: true },
      vouches: { type: Number, require: true, default: 0 },
      reports: { type: Number, require: true, default: 0 },
    },
  ],
});
