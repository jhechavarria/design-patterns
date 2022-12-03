import AbstractCarPart from '../abstraction/AbstractCarPart'

export default interface IVisitor {
    // An interface that custom Visitors should implement
    visit(abstractCarPart: AbstractCarPart): void
}
