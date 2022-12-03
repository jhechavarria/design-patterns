// Abstract Factory Use Case Example Code
import FurnitureFactory from './concrete-class/furniture-factory'

export default function () {
    let FURNITURE = FurnitureFactory.getFurniture('SmallChair')
    console.log(FURNITURE?.name)
    console.log(FURNITURE?.getDimensions())

    FURNITURE = FurnitureFactory.getFurniture('MediumTable')
    console.log(FURNITURE?.name)
    console.log(FURNITURE?.getDimensions())
}
