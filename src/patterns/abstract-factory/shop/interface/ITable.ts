import dimension from "../type/dimension"

export default interface ITable {
    name: string
    height: number
    width: number
    depth: number

    getDimensions(): dimension
}
