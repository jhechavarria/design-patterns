import Command from '../../interface/Command';
import Bulb from '../Bulb';

export default class TurnOn implements Command {
    protected bulb: Bulb

    constructor(bulb: Bulb) {
        this.bulb = bulb
    }

    execute() {
        this.bulb.turnOn()
    }

    undo() {
        this.bulb.turnOff()
    }

    redo() {
        this.execute()
    }
}
