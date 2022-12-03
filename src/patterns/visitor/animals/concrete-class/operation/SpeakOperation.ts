import AnimalOperation from '../../interface/AnimalOperation';
import Dolphin from '../Dolphin';
import Lion from '../Lion';
import Monkey from '../Monkey';

export default class SpeakOperation implements AnimalOperation {
    visitMonkey(monkey: Monkey): void {
        monkey.shout()
    }

    visitLion(lion: Lion): void {
        lion.roar()
    }

    visitDolphin(dolphin: Dolphin): void {
        dolphin.speak()
    }
}
