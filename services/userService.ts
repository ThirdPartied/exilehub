import { connectToDatabase } from "@/db";
export async function createUser(username: string, email: string) {
  const client = await connectToDatabase();
  const db = client.db;

  const users = db.collection("users");

  const result = await users.insertOne({
    username,
    email,
    createdAt: new Date(),
  });

  return result.insertedId;
}

export async function getUserById(userId: number) {
  const client = await connectToDatabase();
  const db = client.db;

  const users = db.collection("users");

  return users.findOne({ _id: userId });
}
