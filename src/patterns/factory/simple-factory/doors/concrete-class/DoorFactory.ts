import Door from '../interface/Door';
import WoodenDoor from './WoodenDoor';

export default class DoorFactory {
    static makeDoor(width: number, height: number): Door {
        return new WoodenDoor(width, height)
    }
}
