import { useBookStore } from "../stores/books.svelte.js";

const getBooks = async () => {
    const response = await fetch("/api/books");
    return await response.json();
  };
  

  const createBook = async (book) => {

    const response = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    });
  
    const data = await response.json();
    if (!data.error) {
      const bookStore = useBookStore();
      bookStore.addBook(data);
    }
  
    return data;
  };
  
  const deleteBook = async (bookId) => {
    const response = await fetch(`/api/books/${bookId}`, {
      method: "DELETE"
    }); 
    return await response.json()
  /*  const data = await response.json();
    console.log("books-apiiiii", data)
    if(!data.error) {
      const bookStore = useBookStore();
      bookStore.deleteBook(bookId)
    }
    return data;  */ 
  
  }
  export { createBook, getBooks , deleteBook};
