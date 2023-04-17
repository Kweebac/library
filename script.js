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
    const newDiv = document.createElement("div");
    const newDivInner = document.createElement("div");
    const newDivInner2 = document.createElement("div");
    const newDivInner3 = document.createElement("div");
    const newDivInner4 = document.createElement("div");

    newDiv.classList.add("card");
    newDivInner.textContent = `Title: ${book.title}`;
    newDivInner2.textContent = `Author: ${book.author}`;
    newDivInner3.textContent = `Pages: ${book.pages}`;
    newDivInner4.textContent = `Read? ${book.finished ? "Yes" : "No"}`;
    newDiv.appendChild(newDivInner);
    newDiv.appendChild(newDivInner2);
    newDiv.appendChild(newDivInner3);
    newDiv.appendChild(newDivInner4);

    cards.appendChild(newDiv);
  });
}

addBook("The Return of the King", "J.R.R Tolkien", 416, true);
addBook("Book1", "Rando", 2123, true);
addBook("Book2", "Rando", 32, false);
addBook("Book3", "Rando", 124, false);
addBook("Book4", "Rando", 555);

displayBooks();
