import Computer from './concrete-class/computer';
import ComputerFacade from './concrete-class/computer-facade';

export default function () {
    const computer = new Computer()
    const facade = new ComputerFacade(computer)

    console.log('Turning On')
    facade.turnOn()

    console.log()

    console.log('Turning Off')
    facade.turnOff()
}
