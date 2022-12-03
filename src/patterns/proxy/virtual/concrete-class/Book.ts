import content from '../data/book'

export default class Book {
    protected pages: string[] = content

    getContent() {
        return this.pages
    }
}
