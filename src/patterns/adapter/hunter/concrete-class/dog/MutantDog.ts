import Dog from '../../interface/Dog';

export default class MutantDog implements Dog {
    bark() {
        console.log('Hund Hund!')
    }
}
