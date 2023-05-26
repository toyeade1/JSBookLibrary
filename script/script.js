let myLibrary = [];

/* This is the function that creates a book object */
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() { 
        console.log(`${title} written by ${author}. It has ${pages} pages and have I read it? ${this.hasRead}`);
     }      
}


function addBooktoLibrary(library, object) {
    library.push(object);
    console.log(`adding ${object.title} Book to Library`);
}


/* Creating a function that will be called when the page is loaded and when the library is updated. */
function displayLibrary(library) {

    let bookToAdd = library[library.length - 1];

     /* Creating the new book element */
    let mainBody = document.querySelector(".body-left-body");
    let bookContent = document.createElement("div");
    let bookContentTop = document.createElement("div");
    let bookContentBottom = document.createElement("div");
    let icon = document.createElement("i")
    let title = document.createElement("div");
    let author = document.createElement("div");
    let pages = document.createElement("div");
    let read = document.createElement("div");

    /* Assigning the proper classes to the elements */
    icon.classList.add("fa-solid");
    icon.classList.add("fa-book");
    bookContent.classList.add("book-contents");
    bookContentTop.classList.add("book-contents-top");
    bookContentBottom.classList.add("book-contents-bottom");
    title.classList.add("book-title");
    author.classList.add("book-author");
    pages.classList.add("book-pages");
    read.classList.add("has-read");

    /* Building the Book structure */
    title.textContent = bookToAdd.title;
    author.textContent = bookToAdd.author;
    pages.textContent = `${bookToAdd.pages} pages`;
    read.textContent = bookToAdd.hasRead;

    /* Changing the read output */
    if (read.textContent === "true") {
        read.textContent = "Read"};
    if (read.textContent === "false") {
        read.textContent = "Not Read"};
     
    /* Adding Everything together */
    bookContentTop.appendChild(icon);
    bookContentBottom.appendChild(title);
    bookContentBottom.appendChild(author);
    bookContentBottom.appendChild(pages);
    bookContentBottom.appendChild(read)
    bookContent.appendChild(bookContentTop);
    bookContent.appendChild(bookContentBottom);
    mainBody.appendChild(bookContent);
    }


/* This function is present the form for adding a book */
let addBook = document.querySelector('.button');
addBook.addEventListener("click", function(e) {

    document.getElementById("bookForm").style.display = "block";
    document.getElementById("bookForm").style.top = (window.innerHeight / 2) - (document.getElementById("bookForm").height / 2) + "px";
    document.getElementById("bookForm").style.left = (window.innerWidth / 2) - (document.getElementById("bookForm").width / 2) + "px";
});




/* This is the cancel button that will close the form and clear its contents */
let cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener("click", function(e) {
    e.preventDefault();

    let allInputs = document.querySelectorAll("input");
    allInputs.forEach(singleInput => singleInput.value = "");

    document.getElementById("bookForm").style.display = "none";
});

function editButton() {
    let bookLibrary = document.querySelectorAll(".book-contents");
    let currentAuthor = ""

    bookLibrary.forEach(book => book.addEventListener("click", function(e) {

        console.log(book);

        currentAuthor = document.getElementsByClassName("book-author").item(0);
    
        console.log(currentAuthor);
        console.log(currentAuthor.innerText);

        let currentPage = book.page;
        let currentHadRead = book.read;

        document.getElementById("bookForm").style.display = "block";
        document.getElementById("bookForm").style.top = (window.innerHeight / 2) - (document.getElementById("bookForm").height / 2) + "px";
        document.getElementById("bookForm").style.left = (window.innerWidth / 2) - (document.getElementById("bookForm").width / 2) + "px";

    }));
};



/* This function will add the book to the library and execute the display library function */
let submitButton = document.querySelector(".add-book");
submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("has-read").checked;

    if (read === true) {
        read = "Read"};
    if (read === false) {
        read = "Not Read"};

    let newBook = new Book(title,author,pages,read);
    addBooktoLibrary(myLibrary,newBook);
    displayLibrary(myLibrary);

    let allInputs = document.querySelectorAll("input");
    allInputs.forEach(singleInput => singleInput.value = "");
    document.getElementById("has-read").checked = false;

    document.getElementById("bookForm").style.display = "none";

    editButton();
});



