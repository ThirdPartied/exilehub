import { connectToDatabase } from "../..";
import { faker } from "@faker-js/faker";
import { models } from "../models";
import { createUser } from "../factories/user";
import { createCharacter } from "../factories/character";
import { randomUUID } from "crypto";
import { createItem } from "../factories/item";
import { createCommunity } from "../factories/community";

const {
  User,
  Character,
  Item,
  CustomService,
  TradeHistory,
  Community,
  Reputation,
} = models;

type SeederConfig = {
  numberOfUsers: number;
  numberOfCharacters: number;
  numberOfItems: number;
  numberOfCommunities: number;
  numberOfAdmins: number;
  numberOfCustomServices: number;
  numberOfTradeHistories: number;
};
const defaultSeederConfig = {
  numberOfUsers: 40,
  numberOfCharacters: 5,
  numberOfItems: 3,
  numberOfCommunities: 5,
  numberOfAdmins: 3,
  numberOfCustomServices: 20,
  numberOfTradeHistories: 20,
};

export async function seedDatabase(
  seederConfig: SeederConfig = defaultSeederConfig
) {
  const {
    numberOfUsers,
    numberOfCharacters,
    numberOfItems,
    numberOfCommunities,
    numberOfAdmins: numberOfModerators,
    numberOfCustomServices,
    numberOfTradeHistories,
  } = seederConfig;

  const { helpers } = faker;
  let users: any[] = [];
  let characters: any[] = [];
  let items: any[] = [];
  let communities: any[] = [];

  const client = await connectToDatabase();
  try {
    await Promise.all([
      User.deleteMany({}),
      Character.deleteMany({}),
      Item.deleteMany({}),
      CustomService.deleteMany({}),
      TradeHistory.deleteMany({}),
      Community.deleteMany({}),
      Reputation.deleteMany({}),
    ]);

    users = await seedUsers(async (user) => {
      characters = await seedCharacters(user, async (character) => {
        items = await seedItems(user, character);
      });
    });

    //Seed Communities
    communities = await seedCommunities((community) => {});
    //Seed Reputation
    //Seed Trade History
    //Seed Custom Service

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Close the database connection
    client?.disconnect();
  }

  async function seedUsers(onCreateUser = async (newUser: any) => {}) {
    const users = [];
    for (let i = 0; i < numberOfUsers; i++) {
      let uuid = randomUUID();

      let newUser = await createUser({ _id: uuid });
      users.push(newUser);
      await onCreateUser(newUser);
    }
    return users;
  }

  async function seedCharacters(
    user: any,
    onCreateCharacter = async (newCharacter: any) => {}
  ) {
    const characters = [];

    for (let i = 0; i < numberOfCharacters; i++) {
      let newCharacter = await createCharacter({ user: user.id });
      characters.push(newCharacter);
      await onCreateCharacter(newCharacter);
    }
    return characters;
  }
  async function seedItems(
    user: any,
    character: any,
    onCreateItem = async (newItem: any) => {}
  ) {
    const items = [];
    for (let i = 0; i < numberOfItems; i++) {
      let newItem = await createItem({
        user: user.id,
        character: character.id,
        league: character.league,
      });
      items.push(newItem);
      await onCreateItem(newItem);
    }
    return items;
  }
  async function seedCommunities(
    onCreateCommunity = (newCommunity: any) => {}
  ) {
    const communities = [];
    for (let i = 0; i < numberOfCommunities; i++) {
      const moderators = helpers.arrayElements(users, numberOfModerators);
      const moderatorsUserIds = moderators.map((moderator) => moderator.id);
      const newCommunity = await createCommunity({
        ownerUserId: helpers.arrayElement(users).id,
        moderatorsUserIds,
      });
      communities.push(newCommunity);
      onCreateCommunity(newCommunity);
    }
    return communities;
  }
}
seedDatabase();
