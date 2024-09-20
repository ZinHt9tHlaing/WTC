let Book = function (title, author) {
  this.title = title;
  this.author = author;
  this.getBookInfo = () =>
    `Book title is ${this.title} written by ${this.author}`;
};

let book1 = new Book("book 1", "nano");
let book2 = new Book("book 2", "popo");
let book3 = new Book("book 3", "kyawGyi");
let book4 = new Book("book 4", "joeLay");
// console.log(book2.getBookInfo());

let library = new Map();
library.set(book1, true);  // *TODO: Main
// library.set(book2, false);
// library.set(book3, false);
// library.set(book4, true);
// console.log(library.get(book1));

function checkoutBook(book) {
  if (library.has(book1) && library.get(book1)) {
    // *TODO: စာအုပ်ကရှိတယ် && ယူလို့လည်းရတယ်
    library.set(book, false);
    console.log(`book ${book.title} checkout success`);
  } else {
    console.log(`book ${book.title} is not available`);
  }
}

// function checkoutBook(book) {
//   if (library.has(book) && !library.get(book)) {  // *TODO: စာအုပ်ကရှိတယ် && ယူလို့မရသေး
//     library.set(book, false);
//     console.log(`book ${book.title} checkout success`);
//   } else {
//     console.log(`book ${book.title} is not available`);
//   }
// }

// checkoutBook(book2);

function isAvailable(book) {
  if (library.has(book)) {
    return book.author;
  } else {
    return "not found";
  }
}
// console.log(isAvailable(book1));

function Task(id, description) {
  this.id = id;
  this.description = description;
  this.complete = false;
  this.status = this.complete === true ? true : false;

  this.updateDescription = (newDescription) =>
    (this.description = newDescription);
}

let task1 = new Task(1, "To eat");
// console.log(task1.complete); 

let tasks = new Map();
// tasks.set(task1, true);  // *TODO: Main

function completeTask(task) {
  if (tasks.has(task)) {
    tasks.set(task, true);
    task.complete;
    console.log(`Task ${task.id} complete success`);
  } else {
    console.log(`Task ${task.id} is not complete success`);
  }
}
// completeTask(task1)

function isTaskCompleted(task) {
  if (tasks.has(task)) {
    return tasks.get(task);
  }
  return false;
}
console.log(isTaskCompleted(task1));

function notCompleteTask(task) {
  if (!tasks.has(task)) {
    tasks.set(task, true);
    task.complete;
    console.log(`Task ${task.id} complete success`);
  } else {
    console.log(`Task ${task.id} is not complete success`);
  }
}
// notCompleteTask(task1)

function addTask(task) {
  if (!tasks.has(task)) {
    tasks.set(task, true);
    task.complete;
    console.log(`Task ${task.id} add success`);
  } else {
    console.log(`Task ${task.id} already success`);
  }
}
// addTask(task1);
