import IVisitor from '../interface/IVisitor'
import AbstractCarPart from '../abstraction/AbstractCarPart'

export default class TotalPriceVisitor implements IVisitor {
    // Print out the total cost of the parts in the car
    totalPrice = 0

    visit(abstractCarPart: AbstractCarPart) {
        if (abstractCarPart.price !== undefined) {
            this.totalPrice += abstractCarPart.price as number
        }
    }
}
