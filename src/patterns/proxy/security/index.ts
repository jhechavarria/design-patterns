import LabDoor from './concrete-class/LabDoor';
import Security from './concrete-class/Security';

export default function () {
    const door = new Security(new LabDoor())
    const rightPassword = '$ecr@t'
    const wrongPassword = 'wrong password'

    door.open(rightPassword)
}
