export default class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== "string") {
            console.error('Name must be a string.');
            return;
        }
        if (newName.length < 1) {
            console.error("Error: Name length should be at least 1 symbol");
            return;
        }
        this._name = newName;
    }
    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor !== "string") {
            console.warn('Author must be a string.');
            return;
        }
        this._author = newAuthor;
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (typeof newYear !== "number" || newYear <= 0) {
            console.warn('Year must be a positive number.');
            return;
        }
        this._year = newYear;
    }

    printInfo() {
        console.log(`The review is for the ${this._name} written by ${this._author} in ${this._year}.`);
    }

    static findOldestBook(books) {
        let oldestBook = books[0];
        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldestBook.year) {
                oldestBook = books[i];
            }
        }
        return oldestBook;
    }
}

