import ITable from '../interface/ITable'
import dimension from '../type/dimension'

export default class Table implements ITable {
    name = ''
    height = 0
    width = 0
    depth = 0

    getDimensions(): dimension {
        return {
            width: this.width,
            depth: this.depth,
            height: this.height,
        }
    }
}
