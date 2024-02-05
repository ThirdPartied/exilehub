import { removeWhiteSpaceAndSpecialCharacters } from "@/utils";
import { createRandomCommunityName } from "@/utils/factory.utils";
import { faker } from "@faker-js/faker";
import { ObjectId } from "mongoose";
import { models } from "../models";

export function generateCommunityProps() {
  const name = createRandomCommunityName();
  const companyName = faker.company.name();
  const companyNameWithoutSymbols =
    removeWhiteSpaceAndSpecialCharacters(companyName);
  const email = companyNameWithoutSymbols + "@gmail.com";
  const websiteUrl = faker.internet.url();
  return {
    name,
    description: "",
    websiteUrl: faker.internet.url(),
    email,
    createdAt: faker.date.past(),
  };
}
export async function createCommunity(properties = {}) {
  const defaultProps = generateCommunityProps();
  const modifiedProps = Object.assign(defaultProps, properties);
  const newCommunity = await new models.Community(modifiedProps).save();
  return newCommunity;
}
