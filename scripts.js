
const myLibrary = [];
const showButton = document.getElementById("addBookButton");
const closeDialog = document.getElementById("closeDialog");
const addBookDialog = document.getElementById("addBookDialog");


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        let infoString = (title + " by " + author + ", " + pages + ", " + read);
        return infoString;
    }
}

showButton.addEventListener ("click", () => {
    addBookDialog.showModal();
});

closeDialog.addEventListener("click", () => {
    addBookDialog.close();
});

function addBookToLibrary(){

}



const TheHobbit = new Book("The Hobbit", "J.R.R Tolkien", 322, "Not read yet");
