import Book from './Book';

export default class BookParser {
    protected book: Book

    constructor(book: Book) {
        this.book = book
    }

    parseBook() {
        const parsedData = {
            pageCount: 0,
            wordCount: 0,
            characterCount: 0,
        }

        this.book.getContent().forEach((pageContent: string) => {
            parsedData.pageCount++
            parsedData.characterCount += pageContent.length
            parsedData.wordCount += pageContent.split(/[\t|\r|\n|\s]/).length
        })

        return parsedData
    }
}
