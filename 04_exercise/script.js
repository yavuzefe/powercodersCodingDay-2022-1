let bookLists = [
    {
        bookTitle: 'title3',
        author: 'author3'
    },
    {
        bookTitle: 'title1',
        author: 'author1'
    },
    {
        bookTitle: 'title2',
        author: 'author2'
    }
];

let Books = function (title, author) {
    this.title = title;
    this.author = author;
}

{/* <li><h1>Book1</h1>
            <h2>Author1</h2></li>
            <li>book2 </li>
            <li>book3 </li> */}

function createBooks(item) {
    let listOfBooks = [];
    item.forEach(item => {
        const listedBook = new Author(item.bookTitle, item.author);
        const liTag = document.createElement('li');
        const h1Tag = document.createElement('h1');
        const h2Tag = document.createElement('h2');
        const pTag = document.createElement('p');

        h1Tag.textContent = listedBook.bookTitle;
        h2Tag.textContent = listedBook.author;
        pTag.textContent = listedBook.bookPrice;

        h1Tag.appendChild(liTag);
        h2Tag.appendChild(liTag);
        pTag.appendChild(liTag);

        listOfBooks.push(liTag);
    });
}


function addList(list) {
    const ulTag = document.querySelector('main ul');
    sortedList = list.sort()
    sortedList.forEach(li => ulTag.appendChild(li));
}


addList(createBooks(bookLists));