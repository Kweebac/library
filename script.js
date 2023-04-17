// Storing the books
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

// Display books on page load
function displayBooks() {
  const cards = document.querySelector(".cards");

  library.forEach((book) => {
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

// Form
const newBookButton = document.querySelector("body > div:first-child button");
const submitBookButton = document.querySelector("form button");
const closeNewBookButton = document.querySelector("form button:first-of-type");
const form = document.querySelector("form");
newBookButton.addEventListener("click", () => {
  form.style.visibility = "visible";
});
submitBookButton.addEventListener("click", () => {
  form.style.visibility = "hidden";
});
closeNewBookButton.addEventListener("click", () => {
  form.style.visibility = "hidden";
});

addBook("The Return of the King", "J.R.R Tolkien", 416, true);

displayBooks();

console.log(Boolean(""));
