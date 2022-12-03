import Book from './concrete-class/Book';
import BookParser from './concrete-class/BookParser';
import BookParserproxy from './concrete-class/BookParserproxy';
import { register, diffNow } from './concrete-class/counter';

export default function () {
    const book = new Book()
    const parser = new BookParser(book)
    const proxy = new BookParserproxy(parser)

    register('before')
    console.log('Page count', proxy.getPageCount())
    console.log('Word count', proxy.getWordCount())
    console.log('Character count', proxy.getCharacterCount())
    console.log('Before proxying :', diffNow('before'))

    console.log()

    register('before')
    console.log('Page count', proxy.getPageCount())
    console.log('Word count', proxy.getWordCount())
    console.log('Character count', proxy.getCharacterCount())
    console.log('After proxying :', diffNow('before'))
}
