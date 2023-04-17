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
  for (let i = 0; i < library.length; i++) {
    cards.innerHTML += `
      <div class="card">
        <div>Title: ${library[i].title}</div>
        <div>Author: ${library[i].author}</div>
        <div>Pages: ${library[i].pages}</div>
        <div>Read: ${library[i].finished ? "Yes" : "No"}</div>
        <button data-index="${i}">✖</button>
        <button data-index="${i}">Change read value</button>
      </div>
    `;
  }
  const deleteBookButtons = document.querySelectorAll(
    ".card button:first-of-type"
  );
  const changeReadButtons = document.querySelectorAll(
    ".card button:last-of-type"
  );
  deleteBookButtons.forEach((button) => {
    button.addEventListener("click", () => {
      for (let i = 0; i < library.length; i++) {
        if (+button.getAttribute("data-index") === i) {
          library.splice(i, 1);
          removeBooks();
          displayBooks();
        }
      }
    });
  });
  changeReadButtons.forEach((button) => {
    button.addEventListener("click", () => {
      for (let i = 0; i < library.length; i++) {
        if (+button.getAttribute("data-index") === i) {
          library[i].finished
            ? (library[i].finished = false)
            : (library[i].finished = true);
          removeBooks();
          displayBooks();
        }
      }
    });
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
