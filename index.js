console.log("hello peter");
//constructer
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
//display function
function Display() {

}
Display.prototype.add = function (book) {
    tablebody = document.getElementById('tablebody');
    let uistring = `<tr>
        <td>${sr}</td>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;
    tablebody.innerHTML += uistring;

}
Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
}

//show alert when book is added
Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('addbook');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>message:</strong> ${displaymessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    setTimeout(function () {
        message.innerHTML = '';
    }, 3000);
}
//validate the input
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }
}

//add submit event listener to form
let libraryform = document.getElementById('libraryform');
let sr=0;
libraryform.addEventListener('submit', libraryformsubmit);
function libraryformsubmit(e) {
    sr+=1;  
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let coding = document.getElementById('coding');
    let prog = document.getElementById('prog');
    let fict = document.getElementById('fict');
    let type;
    if (coding.checked) {
        type = coding.value;
    }
    else if (prog.checked) {
        type = prog.value
    } else {
        type = fict.value;
    }
    let book = new Book(name, author, type);
    e.preventDefault();
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'your book has been succesfully added');
    } else {
        display.show('danger', 'sorry invalid book or author name');

    }


}