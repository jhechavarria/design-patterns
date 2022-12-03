import AnimalOperation from "../interface/AnimalOperation"
import Animal from '../interface/Animal';

export default class Lion implements Animal {
    roar() {
        console.log('Roaaar!')
    }

    accept(operation: AnimalOperation) {
        operation.visitLion(this)
    }
}
