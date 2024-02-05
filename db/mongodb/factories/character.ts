import { removeWhiteSpaceAndSpecialCharacters } from "@/utils";
import { poeLeagues } from "@/utils/customDictionaries.utils";
import { createRandomName } from "@/utils/factory.utils";
import { faker } from "@faker-js/faker";
import { models } from "../models";

export function generateCharacterProperties() {
  const _id = (Math.random() * 0xfffff * 1000000).toString(16);

  return {
    _id,
    characterName: removeWhiteSpaceAndSpecialCharacters(
      createRandomName().toLowerCase()
    ),
    league: faker.helpers.arrayElement(poeLeagues),
    isActive: faker.datatype.boolean(),
  };
}

export async function createCharacter(properties = {}) {
  const defaultProps = generateCharacterProperties();
  const modifiedProps = Object.assign({}, defaultProps, properties);
  const newCharacter = await new models.Character(modifiedProps).save();
  return newCharacter;
}
