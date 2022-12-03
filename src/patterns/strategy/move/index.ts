import GameCharacter from './concrete-class/GameCharacter'
import Walking from './concrete-class/strategy/Walking'
import Sprinting from './concrete-class/strategy/Sprinting'
import Crawling from './concrete-class/strategy/Crawling'

export default function () {
    // The Client
    const GAME_CHARACTER = new GameCharacter()

    GAME_CHARACTER.move(Walking)
    // Character sees the enemy
    GAME_CHARACTER.move(Sprinting)
    // Character finds a small cave to hide in
    GAME_CHARACTER.move(Crawling)
}
