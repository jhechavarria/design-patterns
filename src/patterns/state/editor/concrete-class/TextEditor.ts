import WritingState from '../interface/WritingState';

export default class TextEditor {
    protected state: WritingState

    constructor(state: WritingState) {
        this.state = state
    }

    setState(state: WritingState) {
        this.state = state
    }

    type(words: string) {
        this.state.write(words)
    }
}
