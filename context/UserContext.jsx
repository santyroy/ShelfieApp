import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error) {
      throw Error(error.message);
    }
  };

  const register = async (email, password) => {
    try {
      await account.create(ID.unique(), email, password);
      // once user is registered we need to call the login method to manually login the user
      await login(email, password);
    } catch (error) {
      throw Error(error.message);
    }
  };
  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const getInitailUserDetails = async () => {
    try {
      const response = await account.get();
      setUser(response);
    } catch (error) {
      setUser(null);
    } finally {
      setAuthChecked(true);
    }
  };

  useEffect(() => {
    getInitailUserDetails();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, register, logout, authChecked }}
    >
      {children}
    </UserContext.Provider>
  );
};
