import Coffee from '../interface/Coffee';

export default class SimpleCoffee implements Coffee {
    getCost(): number {
        return 10
    }

    getDescription(): string {
        return 'Simple coffee'
    }
}
