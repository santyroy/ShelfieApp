import { createContext, useEffect, useState } from "react";
import { databases, client } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "681ee9a10030b4fd56b5";
const COLLECTIONS_ID = "681ee9c100340d2f3bbf";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS_ID,
        [Query.equal("userId", user.$id)]
      );
      setBooks(response.documents);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteBook(id) {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    let unsubscribe;
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTIONS_ID}.documents`;
    if (user) {
      fetchBooks();
      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;
        if (events[0].includes("create")) {
          setBooks((prevBooks) => [...prevBooks, payload]);
        }
      });
    } else {
      setBooks([]);
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};
