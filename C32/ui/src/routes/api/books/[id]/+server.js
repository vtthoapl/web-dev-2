import {json} from '@sveltejs/kit';
import { books } from '../book-data.js';

export const DELETE =  ({ params }) => {
    const { id } = params;
    console.log("IDDDDDD", id)
    const index = books.findIndex((book) => book.id === parseInt(id));
  
    if (index !== -1) {
      books.splice(index, 1);
      return json(
        books,
       // { message: `Book with ID ${id} deleted successfully` },
        { status: 200 }
      );
    } else {
      return json({ error: `Book with ID ${id} not found` }, { status: 404 });
    } 
  };