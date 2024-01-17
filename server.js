const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Global array för att lagra böcker
let books = [
  { id: 1, name: 'Book 1', author: 'Author 1', pages: 200, borrowed: false },
  { id: 2, name: 'Book 2', author: 'Author 2', pages: 150, borrowed: true },
  // Lägg till fler böcker om du vill
];

app.use(bodyParser.json());

// Route för att hämta alla böcker
app.get('/books', (req, res) => {
  res.json(books);
});

// Route för att hämta information om en specifik bok
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Route för att låna en bok
app.get('/borrow/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (book) {
    book.borrowed = true;
    res.json({ message: 'Book borrowed successfully' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Route to add new book
app.post('/add-book', (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  newBook.borrowed = false;
  books.push(newBook);
  res.json({ message: 'Book added successfully', book: newBook });
});

// Route to show all books on the front page
app.get('/', (req, res) => {
    res.json(books);
  }); 

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
