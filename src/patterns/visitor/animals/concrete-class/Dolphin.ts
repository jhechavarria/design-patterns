import AnimalOperation from "../interface/AnimalOperation"
import Animal from '../interface/Animal';

export default class Dolphin implements Animal {
    speak() {
        console.log('Tuut tuttu tuutt!')
    }

    accept(operation: AnimalOperation) {
        operation.visitDolphin(this)
    }
}
