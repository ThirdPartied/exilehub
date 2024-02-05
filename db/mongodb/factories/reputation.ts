import { faker } from "@faker-js/faker";
import { ObjectId } from "mongoose";

export function generateReputation(userId: ObjectId, communities: any[]) {
  return {
    user: userId,
    communityReputation: faker.helpers.multiple(
      () => {
        const randomCommunity = faker.helpers.arrayElement(communities);
        return {
          communityId: randomCommunity._id,
          communityName: randomCommunity.name,
          vouches: faker.number.int({ min: 0, max: 2000 }),
          reports: faker.number.int({ min: 0, max: 3 }),
        };
      },
      { count: { min: 0, max: communities.length } }
    ),
  };
}
