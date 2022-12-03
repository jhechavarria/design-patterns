import Burger from './Burger';

export default class BurgerBuilder {
    public size!: number

    public cheese: boolean = false
    public pepper: boolean = false
    public lettuce: boolean = false
    public tomato: boolean = false

    setSize(size: number): BurgerBuilder {
        this.size = size
        return this
    }

    addCheese(): BurgerBuilder {
        this.cheese = true
        return this
    }
    
    addPepper(): BurgerBuilder {
        this.pepper = true
        return this
    }
    
    addLettuce(): BurgerBuilder {
        this.lettuce = true
        return this
    }
    
    addTomato(): BurgerBuilder {
        this.tomato = true
        return this
    }

    build(): Burger {
        if (!this.size) {
            throw 'Burger size is required'
        }
        return new Burger(this)
    }
}
