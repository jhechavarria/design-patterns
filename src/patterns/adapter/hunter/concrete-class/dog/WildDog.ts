import Dog from '../../interface/Dog';

export default class WildDog implements Dog {
    bark() {
        console.log('Hund Hund!')
    }
}
