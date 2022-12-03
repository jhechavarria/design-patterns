import WritingState from '../../interface/WritingState';

export default class LowerCase implements WritingState {
    write(words: string) {
        console.log(words.toLowerCase())
    }
}
