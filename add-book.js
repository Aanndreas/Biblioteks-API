document.addEventListener('DOMContentLoaded', () => {
    const addBookForm = document.getElementById('add-book-form');
    addBookForm.addEventListener('submit', event => {
      event.preventDefault();
      addBook();
    });
  });
  
  function addBook() {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
  
    const newBook = { name, author, pages };
  
    fetch('http://localhost:3000/add-book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        window.location.href = 'index.html';
      })
      .catch(error => console.error('Error:', error));
  }
  