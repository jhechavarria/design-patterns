// The Iterator Pattern Concept

export default class NumberWheel {
    // The concrete iterator (iterable)

    index: number

    constructor() {
        this.index = 0
    }

    next() {
        // Return a new number next in the wheel
        this.index = this.index + 1
        return (this.index * 2) % 11
    }
}
