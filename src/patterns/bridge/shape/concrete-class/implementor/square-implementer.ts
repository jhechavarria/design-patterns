import IShapeImplementor from '../../interface/ishape-implementer'

export default class SquareImplementer implements IShapeImplementor {
    drawImplementation(): void {
        console.log('**************')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('*            *')
        console.log('**************')
    }
}
