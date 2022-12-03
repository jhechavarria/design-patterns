import Bulb from './concrete-class/Bulb';
import TurnOn from './concrete-class/command/TurnOn';
import TurnOff from './concrete-class/command/TurnOff';
import RemoteControl from './concrete-class/RemoteControl';

export default function () {
    const bulb = new Bulb()

    const turnOn = new TurnOn(bulb)
    const turnOff = new TurnOff(bulb)

    const remote = new RemoteControl()

    remote.submit(turnOn)
    remote.submit(turnOff)
}
