
const myLibrary = [];


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        let infoString = (title + " by " + author + ", " + pages + ", " + read);
        return infoString;
    }
}

function addBookToLibrary(){

}

const TheHobbit = new Book("The Hobbit", "J.R.R Tolkien", 322, "Not read yet");
