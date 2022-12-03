import WritingState from '../../interface/WritingState';

export default class UpperCase implements WritingState {
    write(words: string) {
        console.log(words.toUpperCase())
    }
}
