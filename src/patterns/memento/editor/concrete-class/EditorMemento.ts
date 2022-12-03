export default class EditorMemento {
    protected content: string

    constructor(content: string) {
        this.content = content
    }

    getContent() {
        return this.content
    }
}
