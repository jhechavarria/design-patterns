import IMove from '../../interface/IMove'

export default class Walking implements IMove {
    // A concrete movement strategy for walking

    move(position: [number, number]) {
        position[0] += 1
        console.log(`I am Walking. New position = ${position}`)
    }
}
