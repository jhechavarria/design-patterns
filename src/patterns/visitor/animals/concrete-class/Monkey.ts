import Animal from '../interface/Animal';
import AnimalOperation from '../interface/AnimalOperation';

export default class Monkey implements Animal {
    shout() {
        console.log('Ooh oo aa aa!')
    }

    accept(operation: AnimalOperation) {
        operation.visitMonkey(this)
    }
}
