import IShape from '../interface/ishape'
import IShapeImplementor from '../interface/ishape-implementer'

export default class Square implements IShape {
    #implementer: IShapeImplementor

    constructor(implementer: IShapeImplementor) {
        this.#implementer = implementer
    }

    draw(): void {
        this.#implementer.drawImplementation()
    }
}
