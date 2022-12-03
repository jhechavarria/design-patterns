import SmallChair from '../chair/small-chair'
import MediumChair from '../chair/medium-chair'
import BigChair from '../chair/big-chair'
import IChair from '../../interface/IChair'

export default class ChairFactory {
    static getChair(chair: string): IChair {
        if (chair == 'BigChair') {
            return new BigChair()
        } else if (chair == 'MediumChair') {
            return new MediumChair()
        } else if (chair == 'SmallChair') {
            return new SmallChair()
        } else {
            throw new Error('No Chair Found')
        }
    }
}
