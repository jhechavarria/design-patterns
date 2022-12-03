import BurgerBuilder from "./BurgerBuilder"

export default class Burger {
    protected size: number

    protected cheese: boolean = false
    protected pepper: boolean = false
    protected lettuce: boolean = false
    protected tomato: boolean = false

    constructor(builder: BurgerBuilder) {
        this.size = builder.size
        this.cheese = builder.cheese
        this.pepper = builder.pepper
        this.lettuce = builder.lettuce
        this.tomato = builder.tomato
    }
}
