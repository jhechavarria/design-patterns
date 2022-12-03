import Monkey from './concrete-class/Monkey';
import Lion from './concrete-class/Lion';
import Dolphin from './concrete-class/Dolphin';
import SpeakOperation from './concrete-class/operation/SpeakOperation';
import JumpOperation from './concrete-class/operation/JumpOperation';

export default function() {
    const monkey = new Monkey()
    const lion = new Lion()
    const dolphin = new Dolphin()

    const speak = new SpeakOperation()
    const jump = new JumpOperation()

    monkey.accept(speak)
    lion.accept(speak)
    dolphin.accept(speak)

    monkey.accept(jump)
    lion.accept(jump)
    dolphin.accept(jump)
}
