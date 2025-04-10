
const myLibrary = [];
const showButton = document.getElementById("addBookButton");
const closeDialog = document.getElementById("closeDialog");
const addBookDialog = document.getElementById("addBookDialog");


function Book(id, title, author, pages, read){
    this.id = id;
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
    var title = document.getElementById("Title").value;
    var author = document.getElementById("Author").value;
    var Pages = document.getElementById("Pages").value;
    var yes = document.getElementById("yes").value;
    var no = document.getElementById("no").value;

    const newBook ()


}



const TheHobbit = new Book("The Hobbit", "J.R.R Tolkien", 322, "Not read yet");
