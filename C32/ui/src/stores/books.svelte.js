import * as bookApi from "../http-actions/books-api.js";


let books = $state([]);

const initBooks = async () => {
  if (books.length > 0) return;
  books = await bookApi.getBooks();
}

const useBookStore = () => {
  return {
    get books() {
      return books;
    },
    addBook: (book) => {
      books = [...books, book]
    },
    deleteBook: async (bookId) => {
      try {
        const response = await bookApi.deleteBook(bookId);
        if (response.status === 200) {
          books = books.filter(book => book.id !== bookId)
        console.log(response.data.message); 
      } else {
        console.error(response.data.error); // Log any errors
      }
    } catch (error) {
      console.error('An error occurred while deleting the book:', error);
      }
    }
  }
}


export { initBooks, useBookStore };