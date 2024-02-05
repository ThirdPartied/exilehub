import { removeWhiteSpaceAndSpecialCharacters } from "@/utils";
import { createRandomName } from "@/utils/factory.utils";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import { models } from "../models";

export function getRandomEmail(name: string) {
  const emailPrefix = removeWhiteSpaceAndSpecialCharacters(name.toLowerCase());
  const emailSuffix = faker.helpers.arrayElement([
    "@gmail.com",
    "@hotmail.com",
    "@outlook.com",
  ]);
  return emailPrefix + emailSuffix;
}

export function generateUserProperties() {
  const _id = randomUUID();
  return {
    _id,
    username: removeWhiteSpaceAndSpecialCharacters(
      createRandomName().toLowerCase()
    ),
    email: getRandomEmail(faker.person.firstName() + faker.person.lastName()),
    createdAt: faker.date.past(),
    characters: [],
  };
}

export async function createUser(properties: any = {}): Promise<any> {
  const defaultProps = generateUserProperties();
  const modifiedProps = Object.assign(defaultProps, properties);
  const newUser = await new models.User(modifiedProps).save();
  return newUser;
}
