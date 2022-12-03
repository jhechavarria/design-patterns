import TextEditor from './concrete-class/TextEditor'
import UpperCase from './concrete-class/format/UpperCase'
import LowerCase from './concrete-class/format/LowerCase'
import Default from './concrete-class/format/Default'

export default function () {
    const upperCase = new UpperCase()
    const lowerCase = new LowerCase()
    const defaultStyle = new Default()

    const editor = new TextEditor(defaultStyle)

    editor.type('Première ligne')

    editor.setState(upperCase)

    editor.type('Deuxième ligne')
    editor.type('Troisième ligne')

    editor.setState(lowerCase)

    editor.type('Quatrième ligne')
    editor.type('Cinquième ligne')
}
