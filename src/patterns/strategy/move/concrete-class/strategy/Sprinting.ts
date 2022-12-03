import IMove from '../../interface/IMove'

export default class Sprinting implements IMove {
    // A concrete movement strategy for sprinting

    move(position: [number, number]) {
        position[0] += 2
        console.log(`I am Running. New position = ${position}`)
    }
}
