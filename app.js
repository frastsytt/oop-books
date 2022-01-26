ui = new ui();
ls = new ls();

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const form = document.querySelector("form");
const tabel = document.querySelector("#listing");

form.addEventListener("submit", addBook);
tabel.addEventListener("click", deleteBook);

document.addEventListener('DOMContentLoaded', getBooks);

// add a book to the ui listing & to the local storage

function addBook(e) {
	const book = new Book(titleInput.value, authorInput.value, isbnInput.value);
	ui.addBook(book);
	ls.addBook(book);
	e.preventDefault();
}

// rm the targeted book from ui & localstorage

function deleteBook(e){
	let book = e.target.parentElement.firstChild
	ui.deleteBook(book);
	ls.deleteBook(book);
}

// update ui listing from localstorage

function getBooks(e){
	books = ls.getData();
	console.log(books);
	books.forEach(ui.getBooks.bind(books));
}