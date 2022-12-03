import House from "../concrete-class/house"

export default interface IHouseBuilder {
    house: House
    setBuildingType(buildingType: string): this
    setWallMaterial(wallMaterial: string): this
    setNumberDoors(number: number): this
    setNumberWindows(number: number): this
    getResult(): House
}
