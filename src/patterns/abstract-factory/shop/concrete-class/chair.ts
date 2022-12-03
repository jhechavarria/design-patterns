import dimension from '../type/dimension'
import IChair from '../interface/IChair'

export default class Chair implements IChair {
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
