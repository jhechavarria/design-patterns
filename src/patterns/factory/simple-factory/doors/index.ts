import DoorFactory from './concrete-class/DoorFactory';

export default function () {
    const door = DoorFactory.makeDoor(768, 1024)

    console.log('Width :', door.getWidth())
    console.log('Height :', door.getHeight())
}
