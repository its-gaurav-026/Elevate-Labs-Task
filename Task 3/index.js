const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" }
];

// Redirect root (/) to /books
app.get('/', (req, res) => {
  res.redirect('/books');
});


app.get('/books', (req, res) => {
  res.json(books);
});


// POST add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  console.log("Book added:", newBook); // Debug
  res.status(201).json(newBook);
});

// PUt Update book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ error: 'Book not found' });

  if (title) book.title = title;
  if (author) book.author = author;

  res.status(200).json(book);
});

// DELETE a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  const deletedBook = books.splice(index, 1); // Remove from array
  res.status(200).json({ message: "Book deleted", book: deletedBook[0] });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
