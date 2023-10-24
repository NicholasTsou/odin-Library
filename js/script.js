
var readBtn = document.getElementById('readBtn');
var modal = document.getElementById("myModal");
var openModal = document.getElementById("add");
var bookForm = document.getElementById("bookForm");
var pagesInput = document.getElementById("pages");
var deletebook = document.getElementById('deleteBook');

//array to store books
const myLibrary = [
    {
        title: 'Jujutsu Kaisen',
        author: 'Gege Akutami',
        pages: '192',
        read: true,
        deleteB: false
    },

    {
        title: 'Berserk',
        author: 'Kentaro Miura',
        pages: '224',
        read: false,
        deleteB: false
    },
];

printArray();


function addNewBook(book){
    const bookSection = document.getElementById('book-section');

    const bookDetails = document.createElement('div');
        bookDetails.classList.add('bookDetails');

        const title = document.createElement('p');
        title.textContent = `${book.title}`;

        const author = document.createElement('p');
        author.textContent = `${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `${book.pages}`;

        const read = document.createElement('button');
        read.textContent = `${book.read ? 'Read' : 'Not Read'}`;
        read.setAttribute('id','readBtn');

        const deletebk = document.createElement('button');
        deletebk.textContent = 'Delete';
        deletebk.setAttribute('id','deleteBook');


        if(book.read === true){
                
            read.style.backgroundColor = 'green';
        }else if(book.read === false){
            read.style.backgroundColor = 'red';
        }

        
        read.addEventListener('click', function(){
            if(book.read === true){
                read.style.backgroundColor = 'red';
                book.read = false;
                read.textContent = 'Not Read';
            }else if(book.read === false){
                read.style.backgroundColor = 'green';
                book.read = true;
                read.textContent = 'Read';
            }
            console.log(myLibrary);

        });

        deletebk.addEventListener('click', function (event) {
        
        
            // const indexToDelete = myLibrary.findIndex(book => book.title === book.title);
            const buttonClicked = event.target;
            const bookDetails  = buttonClicked.parentElement;
            const indexToDelete = Array.from(bookDetails.parentElement.children).indexOf(bookDetails);
            console.log(indexToDelete);
            if(indexToDelete !== -1){

                myLibrary.splice(indexToDelete, 1);
                bookDetails.remove();
                console.log(myLibrary);
            }
        });

        bookDetails.appendChild(title);
        bookDetails.appendChild(author);
        bookDetails.appendChild(pages);
        bookDetails.appendChild(read);
        bookDetails.appendChild(deletebk);
        bookSection.appendChild(bookDetails);
}

//function to print books already in the array
function printArray(){

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
        read.textContent = `${book.read ? 'Read' : 'Not Read'}`;
        read.setAttribute('id','readBtn');

        const deletebk = document.createElement('button');
        deletebk.textContent = 'Delete';
        deletebk.setAttribute('id','deleteBook');

        if(book.read === true){
                
            read.style.backgroundColor = 'green';
        }else if(book.read === false){
            read.style.backgroundColor = 'red';
        }

        read.addEventListener('click', function(){
            if(book.read === true){
                read.style.backgroundColor = 'red';
                book.read = false;
                read.textContent = 'Not Read';
            }else if(book.read === false){
                read.style.backgroundColor = 'green';
                book.read = true;
                read.textContent = 'Read';
            }
            console.log(myLibrary);

        });

        deletebk.addEventListener('click', function (event) {
        
        
           // const indexToDelete = myLibrary.findIndex(book => book.title === book.title);
            const buttonClicked = event.target;
            const bookDetails  = buttonClicked.parentElement;
            const indexToDelete = Array.from(bookDetails.parentElement.children).indexOf(bookDetails);
            console.log(indexToDelete);
            if(indexToDelete !== -1){

                myLibrary.splice(indexToDelete, 1);
                bookDetails.remove();
                console.log(myLibrary);
            }
        });
        

        
        bookDetails.appendChild(title);
        bookDetails.appendChild(author);
        bookDetails.appendChild(pages);
        bookDetails.appendChild(read);
        bookDetails.appendChild(deletebk);

        bookSection.appendChild(bookDetails);
    }
}


//adding book to library
function addBook(){

    var bookName = document.getElementById('bookName').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').checked;
    var deleteB = document.getElementById('deleteBook');



    const book = {
        title: bookName,
        author: author,
        pages: pages,
        read: read,
        deleteB: false
    };

    myLibrary.push(book);
    addNewBook(book);

    document.getElementById('bookName').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;



    // printArray(book);
    console.log(myLibrary);
}


document.getElementById('bookForm').addEventListener('submit', function(event) {
    //preventing the form from submitting
    //calling the addBook function to add the book into the array
    event.preventDefault();
    addBook(); 
    modal.style.display = "none";
});

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

