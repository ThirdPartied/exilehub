export function generateTradeHistory(
  sellerId: ObjectId,
  sellerCharacterName: string,
  buyerId: ObjectId,
  league: string,
  communityId: ObjectId,
  isAccepted: false,
  isCompleted: false,
  isReported: false
) {
  return {
    sellerUserId: sellerId,
    buyerUserId: buyerId,
    type: faker.helpers.arrayElement(["Item", "Service"]),
    name: createRandomItemName(),
    characterName: sellerCharacterName,
    league,
    price: faker.number.int({ min: 1, max: 20 }),
    isSuccessful: true,
    createdAt: faker.date.past(),
    communityId,
  };
}
