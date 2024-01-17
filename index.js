document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(books => {
        const bookList = document.getElementById('book-list');
        books.forEach(book => {
          const li = document.createElement('li');
          li.innerHTML = `<a href="book.html?id=${book.id}">${book.name}</a> - ${book.borrowed ? 'Borrowed' : 'Available'}`;
          bookList.appendChild(li);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  