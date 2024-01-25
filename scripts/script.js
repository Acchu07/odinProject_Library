const mainContainer = document.querySelector('.main-container')
const addBookToLibrarybtn = document.querySelector('.btn-add-book')
const dialogPopUpModal = document.querySelector('dialog')

const library = [];

function Book(author,title,pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
}

const newTitle = new Book("Conan Doyle","Hound of the Baskervilles", 327)
const newTitle2 = new Book("Agatha Christie","Black Coffee", 320)


// how to display it not on console but on the webpage
// Create a div and attach to the tree

function createBookOnWebPage(object){
    //Create respective element and append
    const libraryBook = document.createElement("div");
    const bookAuthor = document.createElement("h3");
    const bookAuthorName = document.createElement("p");
    const bookTitle = document.createElement("h3")
    const bookTitleName = document.createElement("p");
    const bookPages = document.createElement("h3");
    const bookPagesNumber = document.createElement("p");
    const buttonRead = document.createElement("button");
    const buttonRemove = document.createElement("button");

    libraryBook.appendChild(bookAuthor);
    libraryBook.appendChild(bookAuthorName);
    libraryBook.appendChild(bookTitle);
    libraryBook.appendChild(bookTitleName);
    libraryBook.appendChild(bookPages);
    libraryBook.appendChild(bookPagesNumber);
    libraryBook.appendChild(buttonRead);
    libraryBook.appendChild(buttonRemove);

    // Have the elements have the respective data

    bookAuthor.innerText = "Author";
    bookTitle.innerText = "Title";
    bookPages.innerText = "Pages";
    buttonRead.innerText = "Read"
    buttonRemove.innerText = "Remove";

    bookAuthorName.innerText = object.author;
    bookTitleName.innerText = object.title;
    bookPagesNumber.innerText = object.pages;


    //Append to Main Container as a child
    libraryBook.classList.add('library-book');
    mainContainer.appendChild(libraryBook);
}

library.push(newTitle);


function addBookToLibrary(){
    library.forEach(createBookOnWebPage);
    
}

addBookToLibrary();

// Event response to Add Book Button

addBookToLibrarybtn.addEventListener('click',()=>{
    dialogPopUpModal.showModal();
})


//Extract Data from form how to do this
