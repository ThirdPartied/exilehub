// graphql.js
import {
  GraphQLSchema,
  GraphQLObjectType as ObjType,
  GraphQLString as String,
  GraphQLID as ID,
  GraphQLBoolean as Boolean,
  GraphQLFloat as Float,
  GraphQLList as List,
} from "graphql";

// Define UserType
export const UserType = new ObjType({
  name: "User",
  fields: () => ({
    _id: { type: ID },
    username: { type: String },
    email: { type: String },
    oauthToken: { type: String },
    createdAt: { type: String },
    characters: { type: new List(CharacterType) }, // Assuming CharacterType is defined
  }),
});

// Define Character type
export const CharacterType = new ObjType({
  name: "Character",
  fields: () => ({
    characterId: { type: ID },
    characterName: { type: String },
    league: { type: String },
    isActive: { type: Boolean },
  }),
});

// Define Item type
export const ItemType = new ObjType({
  name: "Item",
  fields: () => ({
    _id: { type: ID },
    userId: { type: ID },
    characterId: { type: ID },
    league: { type: String },
    itemName: { type: String },
    itemCategory: { type: String },
    isTradable: { type: Boolean },
    isSold: { type: Boolean },
    price: { type: Float },
  }),
});

// Define CustomService type
export const CustomServiceType = new ObjType({
  name: "CustomService",
  fields: () => ({
    _id: { type: ID },
    userId: { type: ID },
    characterName: { type: String },
    league: { type: String },
    serviceName: { type: String },
    description: { type: String },
    price: { type: Float },
    isSold: { type: Boolean },
    community: { type: String },
  }),
});

// Define BuyerRequest type
export const BuyerRequestType = new ObjType({
  name: "BuyerRequest",
  fields: () => ({
    _id: { type: ID },
    customServiceId: { type: ID },
    buyerUserId: { type: ID },
    buyerCharacterName: { type: String },
    message: { type: String },
    isAccepted: { type: Boolean },
    isCompleted: { type: Boolean },
    isReported: { type: Boolean },
    community: { type: String },
  }),
});

// Define TradeHistory type
export const TradeHistoryType = new ObjType({
  name: "TradeHistory",
  fields: () => ({
    _id: { type: ID },
    sellerUserId: { type: ID },
    buyerUserId: { type: ID },
    type: { type: String },
    itemName: { type: String },
    characterName: { type: String },
    league: { type: String },
    price: { type: Float },
    isSuccessful: { type: Boolean },
    date: { type: String },
    community: { type: String },
  }),
});

// Define CommunityStats type
export const CommunityStatsType = new ObjType({
  name: "CommunityStats",
  fields: () => ({
    successfulTrades: { type: Float },
    vouches: { type: Float },
    reports: { type: Float },
  }),
});

// Define Reputation type
export const ReputationType = new ObjType({
  name: "Reputation",
  fields: () => ({
    _id: { type: ID },
    userId: { type: ID },
    communityReputation: { type: CommunityStatsType },
  }),
});

// Define Community type
export const CommunityType = new ObjType({
  name: "Community",
  fields: () => ({
    _id: { type: ID },
    name: { type: String },
    description: { type: String },
    ownerUserId: { type: ID },
    moderatorUserIds: { type: new List(ID) },
    websiteUrl: { type: String },
    email: { type: String },
    createdAt: { type: String },
  }),
});

// Define Query type
export const QueryType = new ObjType({
  name: "Query",
  fields: {
    // Define your query operations here
    getUser: {
      type: UserType,
      args: {
        userId: { type: ID },
      },
      // Resolve function here
    },
    // Add other query fields
  },
});

// // Define Mutation type
// export const MutationType = new ObjType({
//   name: "Mutation",
//   fields: {
//     // Define your mutation operations here
//   },
// });

// Define schema
export const schema = new GraphQLSchema({
  types: [
    UserType,
    CharacterType,
    ItemType,
    CustomServiceType,
    BuyerRequestType,
    TradeHistoryType,
    CommunityStatsType,
    ReputationType,
    CommunityType,
  ],
  query: QueryType,
  //   mutation: MutationType,
});
