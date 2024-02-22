import Book from "./Book.js";
export default class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year);
        this._format = format;
    }

    get format() {
        return this._format;
    }

    set format(newFormat) {
        if (typeof newFormat === 'string' && newFormat.length >= 2) {
            this._format = newFormat;
        } else {
            console.error('File format must be a string and not less than 2 characters.');
        }
    }

    printInfo() {
        super.printInfo();
        console.log(`The format of the book is: ${this._format}`);
    }

    static createFromBook(book, format) {
        return new EBook(book.name, book.author, book.year, format);
    }
}