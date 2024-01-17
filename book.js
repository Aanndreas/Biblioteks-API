document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');
  
    fetch(`http://localhost:3000/books/${bookId}`)
      .then(response => response.json())
      .then(book => {
        const bookInfo = document.getElementById('book-info');
        bookInfo.innerHTML = `
          <p>Name: ${book.name}</p>
          <p>Author: ${book.author}</p>
          <p>Pages: ${book.pages}</p>
          <p>Status: ${book.borrowed ? 'Borrowed' : 'Available'}</p>
        `;
      })
      .catch(error => console.error('Error:', error));
  });
  
  function borrowBook() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');
  
    fetch(`http://localhost:3000/borrow/${bookId}`)
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        window.location.reload();
      })
      .catch(error => console.error('Error:', error));
  }
  