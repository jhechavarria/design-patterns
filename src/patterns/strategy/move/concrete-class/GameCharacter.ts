import IMoveConstructor from '../interface/IMoveConstructor '

export default class GameCharacter {
    // This is the context whose strategy will change

    #position: [number, number] = [0, 0]

    move(movementStyle: IMoveConstructor) {
        // The movement algorithm has been decided by the client
        new movementStyle().move(this.#position)
    }
}
