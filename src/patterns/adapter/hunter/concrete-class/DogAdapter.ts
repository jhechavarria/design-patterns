import Lion from '../interface/Lion';
import Dog from '../interface/Dog';

export default class DogAdapter implements Lion {
    protected dog: Dog

    constructor(dog: Dog) {
        this.dog = dog
    }

    roar(): void {
        this.dog.bark()
    }
}
