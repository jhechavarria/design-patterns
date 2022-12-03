
// House Builder Example Code

import IglooDirector from './concrete-class/director/igloo-director'
import CastleDirector from './concrete-class/director/castle-director'
import HouseBoatDirector from './concrete-class/director/houseboat-director'

export default function () {
    const IGLOO = IglooDirector.construct()
    const CASTLE = CastleDirector.construct()
    const HOUSEBOAT = HouseBoatDirector.construct()

    console.log(IGLOO.construction())
    console.log(CASTLE.construction())
    console.log(HOUSEBOAT.construction())
}
