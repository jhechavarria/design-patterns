import WritingState from '../../interface/WritingState';

export default class Default implements WritingState {
    write(words: string) {
        console.log(words)
    }
}
