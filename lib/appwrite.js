import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("67f7ad08002fa9c9ce2e")
  .setPlatform("com.roy.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
