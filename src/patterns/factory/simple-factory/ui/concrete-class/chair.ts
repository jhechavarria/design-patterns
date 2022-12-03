import { dimension } from '../type/dimension'
import IChair from '../interface/IChair'

// The Chair Base Class
export default class Chair implements IChair {
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
