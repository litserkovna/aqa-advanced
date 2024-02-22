//Importing
import Book from "./Book.js";
import EBook from "./ebook.js";
//Creating constances
const firstBook = new Book("Nineteen Eighty-Four", "George Orwell", 1949);
const secondBook = new Book("The Alchemist", "Paulo Coelho", 1988);
const thirdBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const ebook1 = new EBook('E-Book Dummy name', 'Non-existing Author', 2011, 'PDF');
const ebook2 = EBook.createFromBook(secondBook, 'TXT');
//Printing
firstBook.printInfo()
secondBook.printInfo()
thirdBook.printInfo()
ebook1.printInfo();
ebook2.printInfo();
const oldestBook = Book.findOldestBook([firstBook, secondBook, thirdBook, ebook1, ebook2]);
console.log('The oldest book from the selection is:', oldestBook.name);