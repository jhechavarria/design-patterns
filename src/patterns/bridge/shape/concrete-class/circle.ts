import IShape from '../interface/ishape'
import IShapeImplementor from '../interface/ishape-implementer'

export default class Circle implements IShape {
    #implementer: IShapeImplementor

    constructor(implementer: IShapeImplementor) {
        this.#implementer = implementer
    }

    draw(): void {
        this.#implementer.drawImplementation()
    }
}
