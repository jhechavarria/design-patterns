import BookParser from './BookParser';

export default class BookParserproxy {
    private bookParser: BookParser
    private pageCount!: number
    private wordCount!: number
    private characterCount!: number

    constructor(bookParser: BookParser) {
        this.bookParser = bookParser
    }

    getPageCount() {
        this.parseBook()
        return this.pageCount
    }

    getWordCount() {
        this.parseBook()
        return this.wordCount
    }

    getCharacterCount() {
        this.parseBook()
        return this.characterCount
    }

    parseBook() {
        if (this.pageCount !== undefined) {
            return {
                pageCount: this.pageCount,
                wordCount: this.wordCount,
                characterCount: this.characterCount,
            }
        }

        const parsedData = this.bookParser.parseBook()

        this.pageCount = parsedData.pageCount
        this.wordCount = parsedData.wordCount
        this.characterCount = parsedData.characterCount

        return parsedData
    }
}
