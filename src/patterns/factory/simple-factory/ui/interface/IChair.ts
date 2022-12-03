import { dimension } from '../type/dimension'

export default // A Chair Interface
interface IChair {
    height: number
    width: number
    depth: number
    getDimensions(): dimension
}
