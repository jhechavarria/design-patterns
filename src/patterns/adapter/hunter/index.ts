import Hunter from './concrete-class/Hunter';
import AsianLion from './concrete-class/lion/AsianLion';
import MutantDog from './concrete-class/dog/MutantDog';
import DogAdapter from './concrete-class/DogAdapter';

export default function () {
    const hunter = new Hunter()
    const lion = new AsianLion()
    const dog = new DogAdapter(new MutantDog())

    hunter.hunt(lion)
    hunter.hunt(dog)
}
