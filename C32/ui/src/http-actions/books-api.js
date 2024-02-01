const getBooks = async () => {
    const response = await fetch("/api/books");
    return await response.json()
}

const  createBook = async (book) => {
    const response = await fetch("/api/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
    return await response(book)
}
export {createBook, getBooks}