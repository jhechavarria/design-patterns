import BurgerBuilder from './concrete-class/BurgerBuilder';

export default function () {
    const burger = new BurgerBuilder()
        .setSize(10)
        .addLettuce()
        .addTomato()
        .build()

    console.log(burger)
}
