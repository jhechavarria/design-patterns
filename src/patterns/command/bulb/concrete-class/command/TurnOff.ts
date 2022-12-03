import Command from '../../interface/Command';
import Bulb from '../Bulb';

export default class TurnOff implements Command {
    protected bulb: Bulb

    constructor(bulb: Bulb) {
        this.bulb = bulb
    }

    execute() {
        this.bulb.turnOff()
    }

    undo() {
        this.bulb.turnOn()
    }

    redo() {
        this.execute()
    }
}
