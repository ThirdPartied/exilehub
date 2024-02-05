import { createRandomItemName } from "@/utils/factory.utils";
import { faker } from "@faker-js/faker";
import { models } from "../models";

export function randomizeItemProperties() {
  const itemName = createRandomItemName();
  return {
    itemName,
    itemCategory: itemName.split(" ")[1],
    isTradable: true,
    isSold: false,
    price: faker.number.int({ min: 1, max: 10 }),
  };
}

export async function createItem(properties = {}) {
  const defaultProps = randomizeItemProperties();
  const modifiedProps = Object.assign(defaultProps, properties);
  const newItem = await new models.Item(modifiedProps).save();
  return newItem;
}
