import VanillaCoffee from './concrete-class/addon/VanillaCoffee';
import WhipCoffee from './concrete-class/addon/WhipCoffee';
import MilkCoffee from './concrete-class/addon/MilkCoffee';
import SimpleCoffee from './concrete-class/SimpleCoffee';

export default function () {
    const baseCoffee = new SimpleCoffee()
    console.log(baseCoffee.getCost())
    console.log(baseCoffee.getDescription())
    console.log()

    const milkCoffee = new MilkCoffee(baseCoffee)
    console.log(milkCoffee.getCost())
    console.log(milkCoffee.getDescription())
    console.log()

    const whipeCoffee = new WhipCoffee(milkCoffee)
    console.log(whipeCoffee.getCost())
    console.log(whipeCoffee.getDescription())
    console.log()

    const vanillaCoffee = new VanillaCoffee(whipeCoffee)
    console.log(vanillaCoffee.getCost())
    console.log(vanillaCoffee.getDescription())
}
