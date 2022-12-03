import Coffee from '../../interface/Coffee';

export default class VanillaCoffee implements Coffee {
    protected coffee: Coffee
    protected cost: number = 3
    protected description: string = 'vanilla'

    constructor(coffee: Coffee) {
        this.coffee = coffee
    }

    getCost(): number {
        return this.coffee.getCost() + this.cost
    }

    getDescription(): string {
        return this.coffee.getDescription() + `, ${this.description}`
    }
}
