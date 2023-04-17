let library = [];

function Book(title, author, pages, finished) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.finished = finished;
}

function addBook(title, author, pages, finished) {
  library.push(new Book(title, author, pages, finished));
}

function displayBooks() {
  library.forEach((book) => {
    const cards = document.querySelector(".cards");

    cards.innerHTML += `
      <div class="card">
        <div>Title: ${book.title}</div>
        <div>Author: ${book.author}</div>
        <div>Pages: ${book.pages}</div>
        <div>Read: ${book.finished ? "Yes" : "No"}</div>
      </div>
    `;
  });
}

addBook("The Return of the King", "J.R.R Tolkien", 416, true);
addBook("Book1", "Rando", 2123, true);
addBook("Book2", "Rando", 32, false);
addBook("Book3", "Rando", 124, false);
addBook("Book4", "Rando", 555);

displayBooks();
