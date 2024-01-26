const mainContainer = document.querySelector('.main-container')
const addBookToLibrarybtn = document.querySelector('.btn-add-book')
const dialogPopUpModal = document.querySelector('dialog')

const library = [];
let pushArrayIndexValue = 0;

function Book(author,title,pages,bHasRead){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.bHasRead = bHasRead;
}

function ReadBook(e){
    if(!library[e.target.parentNode.dataset.indexNumber].bHasRead){
        library[e.target.parentNode.dataset.indexNumber].bHasRead = true;
        e.target.parentNode.classList.add("sample-test");
        e.target.innerText = "Unread";
        return;
    }
    library[e.target.parentNode.dataset.indexNumber].bHasRead = false;
    e.target.parentNode.classList.remove("sample-test");
    e.target.innerText = "Read";
}

// const newTitle = new Book("Sir Arthur Conan Doyle","Hound of the Baskervilles", 327)
// console.log(newTitle);


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

    libraryBook.dataset.indexNumber = pushArrayIndexValue;
    pushArrayIndexValue++;

    buttonRemove.addEventListener('click',removeBook);
    buttonRead.addEventListener('click',ReadBook);

    libraryBook.classList.add("library-book");
    buttonRemove.classList.add("remove");

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

    if(object.bHasRead){
        libraryBook.classList.add("sample-test")
        buttonRead.innerText = "Unread";
    }
}


function addBookToLibrary(){
    unparentChildren();
    pushArrayIndexValue = 0;
    library.forEach(createBookOnWebPage);
}

function unparentChildren(){
    const mainParent = document.querySelector('.main-container');
    while(mainParent.firstChild){
        mainParent.removeChild(mainParent.firstChild);
    }
}

// Event response to Add Book Button

addBookToLibrarybtn.addEventListener('click',()=>{
    dialogPopUpModal.showModal();
})



const submitBtn = document.querySelector("button[type='submit']");
const cancelBtn = document.querySelector("button[type='submit'] + button");
const readBtn = document.querySelector("form > button");

readBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const newBook = new Book(document.querySelector('#Author-Name').value,document.querySelector('#Book-Name').value,document.querySelector('#Pages').value,true);
    library.push(newBook);
    addBookToLibrary(newBook);
    document.querySelector("form").reset();
})

cancelBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    dialogPopUpModal.close();
    document.querySelector("form").reset();
})

//Extract Data
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const newBook = new Book(document.querySelector('#Author-Name').value,document.querySelector('#Book-Name').value,document.querySelector('#Pages').value,false);
    library.push(newBook);
    addBookToLibrary(newBook);
    document.querySelector("form").reset();
})

// Remove book from array 
function removeBook(e){
        let arrayIndexNumber = e.target.parentNode.dataset.indexNumber;
        library.splice(arrayIndexNumber,1);
        addBookToLibrary();        
}