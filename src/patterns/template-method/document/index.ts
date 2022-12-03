import HTMLDocument from './concrete-class/html-document'
import TextDocument from './concrete-class/text-document'

export default function () {
    const TEXT_DOCUMENT = new TextDocument()
    TEXT_DOCUMENT.createDocument('Some Text')

    const HTML_DOCUMENT = new HTMLDocument()
    HTML_DOCUMENT.createDocument('Line 1\nLine 2')
}
