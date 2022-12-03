import Monkey from '../concrete-class/Monkey';
import Lion from '../concrete-class/Lion';
import Dolphin from '../concrete-class/Dolphin';

export default interface AnimalOperation {
    visitMonkey(monkey: Monkey): void
    visitLion(lion: Lion): void
    visitDolphin(dolphin: Dolphin): void
}
