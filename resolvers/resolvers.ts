// resolvers.js
import { ObjectId } from "mongodb";

export const resolvers = {
  Query: {
    getUser: async (_, { userId }, { db }) => {
      return await db
        .collection("users")
        .findOne({ _id: new ObjectId(userId) });
    },
    // Implement other query resolvers...
  },
  Mutation: {
    // Implement your mutation resolvers here...
  },
  // Define other type resolvers...
};
