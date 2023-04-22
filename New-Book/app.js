const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const descriptionInput = document.getElementById('description')
const pagesInput = document.getElementById('pages')
const priceInput = document.getElementById('price')
const imageInput = document.getElementById('image')
const submit = document.querySelector('.submit')
const books = document.querySelector('.books')

let myLibrary = [];

//image input
let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");

uploadButton.addEventListener( 'change',  () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
      chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    
})



//library new input

console.log('ya khouya')
document.querySelector('form').addEventListener('submit',      function(event) {
  event.preventDefault();
  let b = new Book(titleInput.value, authorInput.value, descriptionInput.value,pagesInput.value, priceInput.value, chosenImage.getAttribute("src"))
  myLibrary.push(b);
  //aading new book in index.html
  

});




function Book(title, author, description, totalPages, price, imageURL) {
  this.title = title;
  this.author = author;
  this.description = description;
  this.totalPages = totalPages;
  this.price = price;
  this.imageURL = imageURL;
  this.readOrNot = 0
}

Book.prototype.toString = function() {
  return this.title + ' ' + this.author +  ' ' + this.description;
}


export const myLibraryArray = myLibrary;















