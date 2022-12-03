import EditorMemento from './EditorMemento';

export default class Editor {
    protected content: string = ''

    type(content: string) {
        this.content += ' ' +content
    }

    getContent() {
        return this.content
    }

    save() {
        return new EditorMemento(this.content)
    }

    restore(content: EditorMemento) {
        this.content = content.getContent()
    }
}
