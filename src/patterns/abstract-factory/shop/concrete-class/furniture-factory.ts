// Abstract Furniture Factory

import ChairFactory from './factory/chair-factory'
import TableFactory from './factory/table-factory'
import IFurniture from '../interface/IFurniture'

export default class FurnitureFactory {
    static getFurniture(furniture: string): IFurniture | undefined {
        try {
            if (
                ['SmallChair', 'MediumChair', 'BigChair'].indexOf(
                    furniture
                ) > -1
            ) {
                return ChairFactory.getChair(furniture)
            }
            if (
                ['SmallTable', 'MediumTable', 'BigTable'].indexOf(
                    furniture
                ) > -1
            ) {
                return TableFactory.getTable(furniture)
            }
            throw new Error('No Factory Found')
        } catch (e) {
            console.log(e)
        }
    }
}
