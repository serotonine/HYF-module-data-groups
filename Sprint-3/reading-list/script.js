window.addEventListener("load", ()=> {
  const readingList = document.getElementById("reading-list");
  for(let book of books){
    readingList.append(createLi(book));

  }
  });
/*
title: 'The Most Human Human', 
author: 'Brian Christian', 
alreadyRead: true, 
bookCoverImage: 'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg'
*/
  function createLi({title,author,alreadyRead,bookCoverImage }){
    const li = document.createElement("li");
    // !alreadyRead && li.classList.add("read");
    !alreadyRead && (li.style.backgroundColor = "red");
    li.classList.add("book")
    li.innerHTML = `
        <figure class="book_image"><img src="${bookCoverImage}"></figure>
        <div class="book_text">
        <h3>${title}</h3>
        <p>by ${author}</p>
        </div>
    `
    return li;

  }

// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];


