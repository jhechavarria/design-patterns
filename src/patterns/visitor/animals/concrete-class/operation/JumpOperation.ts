import AnimalOperation from '../../interface/AnimalOperation';
import Dolphin from '../Dolphin';
import Lion from '../Lion';
import Monkey from '../Monkey';

export default class JumpOperation implements AnimalOperation {
    visitMonkey(monkey: Monkey): void {
        console.log('Jumped 20 feet high! on to the tree!')
    }

    visitLion(lion: Lion): void {
        console.log('Jumped 7 feet! Back on the ground!')
    }

    visitDolphin(dolphin: Dolphin): void {
        console.log('Walked on water a little and disappeared')
    }
}
