import { poeServices } from "@/utils/customDictionaries.utils";
import { faker } from "@faker-js/faker";
import { ObjectId } from "mongoose";

export function generateServices(
  userId: ObjectId,
  characterName: string,
  league: string,
  communityId: ObjectId
) {
  return {
    user: userId,
    characterName,
    league,
    serviceName: faker.helpers.arrayElement(poeServices),
    description: "",
    price: faker.number.int({ min: 1, max: 30 }),
    isSold: false,
    communityId,
  };
}
