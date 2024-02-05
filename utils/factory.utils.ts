import { faker } from "@faker-js/faker";
import { uniqueNamesGenerator, starWars } from "unique-names-generator";
import {
  gamerNumbers,
  goofyNicknames,
  itemBaseTypes,
  itemPrefixes,
  itemSuffixes,
  twitchReactions,
} from "@/utils/customDictionaries.utils";
const nameDictionaryPool = [
  gamerNumbers,
  twitchReactions,
  goofyNicknames,
  starWars,
];
export const createRandomName = () =>
  uniqueNamesGenerator({
    dictionaries: [
      faker.helpers.arrayElement(nameDictionaryPool),
      faker.helpers.arrayElement(nameDictionaryPool),
    ],
    length: 2,
    separator: "",
  });
export const createRandomItemName = () =>
  uniqueNamesGenerator({
    dictionaries: [itemPrefixes, itemBaseTypes, itemSuffixes],
    length: 3,
    separator: " ",
  });
export const createRandomCommunityName = () =>
  uniqueNamesGenerator({
    dictionaries: [twitchReactions, goofyNicknames, ["Community"]],
    length: 2,
    separator: " ",
  });
