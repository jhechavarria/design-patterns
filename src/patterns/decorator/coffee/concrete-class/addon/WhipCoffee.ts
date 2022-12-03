import Coffee from '../../interface/Coffee';

export default class WhipCoffee implements Coffee {
    protected coffee: Coffee
    protected cost: number = 5
    protected description: string = 'whip'

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
