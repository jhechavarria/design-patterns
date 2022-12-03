import IMove from '../../interface/IMove'

export default class Crawling implements IMove {
    // A concrete movement strategy for crawling

    move(position: [number, number]) {
        position[0] += 0.5
        console.log(`I am Crawling. New position = ${position} `)
    }
}
