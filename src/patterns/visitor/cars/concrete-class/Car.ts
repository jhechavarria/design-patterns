import IVisitor from '../interface/IVisitor'
import AbstractCarPart from '../abstraction/AbstractCarPart'
import CarBody from './parts/CarBody'
import Engine from './parts/Engine'
import Wheel from './parts/Wheel'

export default class Car extends AbstractCarPart {
    // A Car with parts
    #parts: AbstractCarPart[]

    constructor(name: string) {
        super(name)
        this.#parts = [
            new CarBody('Utility Body', 'ABC-123-21', 1001),
            new Engine('V8 engine', 'DEF-456-21', 2555),
            new Wheel('FrontLeft', 'GHI-789FL-21', 136),
            new Wheel('FrontRight', 'GHI-789FR-21', 136),
            new Wheel('BackLeft', 'GHI-789BL-21', 152),
            new Wheel('BackRight', 'GHI-789BR-21', 152),
        ]
    }

    accept(visitor: IVisitor) {
        this.#parts.forEach((part) => {
            part.accept(visitor)
        })
        visitor.visit(this)
    }
}
