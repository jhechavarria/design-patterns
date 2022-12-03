import Editor from './concrete-class/Editor';

export default function () {
    const editor = new Editor()

    editor.type('Ceci est la première phrase.')
    editor.type('Ceci est la deuxième phrase.')

    const saved = editor.save()

    editor.type('Ceci est la troisème phrase.')

    console.log(editor.getContent())

    editor.restore(saved)

    console.log(editor.getContent())
}
