import { json } from '@sveltejs/kit';
import { books } from './book-data.js';

export const GET = async () => {
  return json(books);
};

export const POST = async ({ request }) => {
  const body = await request.json();
  if (!body.name || !body.pages || !body.isbn) {
    return json({ error: 'Missing required fields' }, { status: 400 });
  }

  const book = {
    id: books.length + 1,
    name: body.name,
    pages: body.pages,
    isbn: body.isbn,
  };

  books.push(book);

  return json(book, { status: 200 });
};

export const DELETE = async ({ params }) => {
  const { id } = params;
  console.log(body)
  const index = books.findIndex((book) => book.id === parseInt(id));

  if (index !== -1) {
    books.splice(index, 1);
    return json(
      { message: `Book with ID ${id} deleted successfully` },
      { status: 200 }
    );
  } else {
    return json({ error: `Book with ID ${id} not found` }, { status: 404 });
  }
};
