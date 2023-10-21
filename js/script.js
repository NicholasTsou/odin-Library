

//array to store books
const myLibrary = [];

function addNewBook(){
    
}
function printArray(book){

    const bookSection = document.getElementById('book-section');

    for(let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i];

    

        const bookDetails = document.createElement('div');
        bookDetails.classList.add('bookDetails');

        const title = document.createElement('p');
        title.textContent = `${book.title}`;

        const author = document.createElement('p');
        author.textContent = `${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `${book.pages}`;

        const read = document.createElement('button');
        read.textContent = `${book.read ? 'Yes' : 'No'}`;

        bookDetails.appendChild(title);
        bookDetails.appendChild(author);
        bookDetails.appendChild(pages);
        bookDetails.appendChild(read);

        bookSection.appendChild(bookDetails);
    }
}
//adding book to library
function addBook(){

    var bookName = document.getElementById('bookName').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').checked;

    const book = {
        bookName: bookName,
        author: author,
        pages: pages,
        read: read
    };

    myLibrary.push(book);

    document.getElementById('bookName').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;


    printArray(book);
    console.log(myLibrary);

}

document.getElementById('bookForm').addEventListener('submit', function(event) {
    //preventing the form from submitting
    //calling the addBook function to add the book into the array
    event.preventDefault();
    addBook(); 
    modal.style.display = "none";
});

var modal = document.getElementById("myModal");
var openModal = document.getElementById("add");
var bookForm = document.getElementById("bookForm");
var pagesInput = document.getElementById("pages");

pagesInput.addEventListener('input', noLetters);

function noLetters(event){
    const value = event.target.value;

    const newValue = value.replace(/\D/g, '');

    event.target.value = newValue;
}

//open modal when user clicks button
openModal.onclick = function() {
    modal.style.display = "block";
}

//close modal if user clicks outside
window.onclick = function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
}

