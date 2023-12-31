import { User } from "./models";
import { connectToDB } from "./utils";
export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error);
  }
};
