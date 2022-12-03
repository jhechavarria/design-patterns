import Car from './concrete-class/Car'
import PrintPartsVisitor from './concrete-class/PrintPartsVisitor'
import TotalPriceVisitor from './concrete-class/TotalPriceVisitor'

export default function () {
    // The Client
    const CAR = new Car('DeLorean')

    // Print out the part name and sku using the PrintPartsVisitor
    CAR.accept(new PrintPartsVisitor())

    // Calculate the total prince of the parts using the TotalPriceVisitor
    const TOTAL_PRICE_VISITOR = new TotalPriceVisitor()
    CAR.accept(TOTAL_PRICE_VISITOR)
    console.log(`Total Price = ${TOTAL_PRICE_VISITOR.totalPrice}`)
}
