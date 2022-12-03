import IVisitor from '../interface/IVisitor'
import AbstractCarPart from '../abstraction/AbstractCarPart'

export default class PrintPartsVisitor implements IVisitor {
    // Print out the part name and sku
    visit(abstractCarPart: AbstractCarPart) {
        if (abstractCarPart.sku !== undefined) {
            console.log(
                `${abstractCarPart.name}\t:${abstractCarPart.sku}\t:${abstractCarPart.price}`
            )
        }
    }
}
