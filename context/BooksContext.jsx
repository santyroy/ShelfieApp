import { createContext, useState } from "react";

const DATABASE_ID = "681ee9a10030b4fd56b5";
const COLLECTIONS_ID = "681ee9c100340d2f3bbf";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
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

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};
