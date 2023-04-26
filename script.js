class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages, finished) {
    this.books.push(new Book(title, author, pages, finished));
  }

  // Display/remove books
  #cards = document.querySelector(".cards");

  removeBooks() {
    this.#cards.innerHTML = "";
  }
  displayBooks() {
    for (let i = 0; i < bookCollection.books.length; i++) {
      this.#cards.innerHTML += `
        <div class="card">
          <div>Title: ${bookCollection.books[i].title}</div>
          <div>Author: ${bookCollection.books[i].author}</div>
          <div>Pages: ${bookCollection.books[i].pages}</div>
          <div>Read: ${bookCollection.books[i].finished ? "Yes" : "No"}</div>
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
        for (let i = 0; i < bookCollection.books.length; i++) {
          if (+button.getAttribute("data-index") === i) {
            bookCollection.books.splice(i, 1);
            bookCollection.removeBooks();
            bookCollection.displayBooks();
          }
        }
      });
    });
    changeReadButtons.forEach((button) => {
      button.addEventListener("click", () => {
        for (let i = 0; i < bookCollection.books.length; i++) {
          if (+button.getAttribute("data-index") === i) {
            bookCollection.books[i].finished
              ? (bookCollection.books[i].finished = false)
              : (bookCollection.books[i].finished = true);
            bookCollection.removeBooks();
            bookCollection.displayBooks();
          }
        }
      });
    });
  }
}

class Book extends Library {
  constructor(title, author, pages, finished) {
    super();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
  }
}

(function Form() {
  const newBookButton = document.querySelector(
    "body > div:first-child button"
  );
  const closeNewBookButton = document.querySelector(
    "form button:first-of-type"
  );
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
    bookCollection.addBook(array[0], array[1], array[2], radioInput.value);

    bookCollection.removeBooks();
    bookCollection.displayBooks();
  });
})();

const bookCollection = new Library();
