import Door from '../interface/Door';

export default class WoodenDoor implements Door {
    protected width: number
    protected height: number

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    getWidth(): number {
        return this.width
    }

    getHeight(): number {
        return this.height
    }
}
