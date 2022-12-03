// Factory Use Case Example Code
import ChairFactory from './concrete-class/chair-factory'

export default function () {
    const CHAIR = ChairFactory.getChair('SmallChair')
    console.log(CHAIR.getDimensions())
}
