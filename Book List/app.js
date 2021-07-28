// Book Constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor

function UI() {}

// Add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");
  // Insert cols
  row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
  list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function (message, className) {
  // Crate div
  const div = document.createElement("div");
  // Add classes
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector(".container");
  //   Get Form
  const form = document.querySelector("#book-form");
  // Inser Alert
  container.insertBefore(div, form);
  // Timeout after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Delete Book
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

// Clear Fields
UI.prototype.clearField = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event Listner for add Book

document.getElementById("book-form").addEventListener("submit", function (e) {
  //   Get form value
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI object
  const ui = new UI();

  // Validate
  if (title === "" || author === "" || isbn === "") {
    // Error message
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Clear Field
    ui.clearField();

    // Show Success
    ui.showAlert("Book Added!", "success");
  }

  e.preventDefault();
});

// Event Listner for Delete

document.getElementById("book-list").addEventListener("click", function (e) {
  // Instantiate UI object
  const ui = new UI();

  // Book Delete
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert("Book deleted", "success");

  e.preventDefault();
});
