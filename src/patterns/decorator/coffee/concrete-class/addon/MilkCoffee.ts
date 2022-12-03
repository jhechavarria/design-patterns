import Coffee from '../../interface/Coffee';

export default class MilkCoffee implements Coffee {
    protected coffee: Coffee
    protected cost: number = 2
    protected description: string = 'milk'

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
