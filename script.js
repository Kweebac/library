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

// Display/remove books
const cards = document.querySelector(".cards");

function removeBooks() {
  cards.innerHTML = "";
}
function displayBooks() {
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
const closeNewBookButton = document.querySelector("form button:first-of-type");
const form = document.querySelector("form");

newBookButton.addEventListener("click", () => {
  form.style.visibility = "visible";
});
closeNewBookButton.addEventListener("click", () => {
  form.style.visibility = "hidden";
});
form.addEventListener("submit", (e) => {
  const textInputs = document.querySelectorAll("form > div > input");
  const radioInput = document.querySelector('input[name="read"]:checked');

  e.preventDefault();
  form.style.visibility = "hidden";

  let array = [];
  textInputs.forEach((item) => {
    array.push(item.value);
  });
  addBook(array[0], array[1], array[2], radioInput.value);

  removeBooks();
  displayBooks();
});
