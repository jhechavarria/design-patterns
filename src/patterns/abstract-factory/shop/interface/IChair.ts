import dimension from '../type/dimension'

export default interface IChair {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): dimension
}
