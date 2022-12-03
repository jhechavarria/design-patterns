import TeaMaker from './concrete-class/TeaMaker';
import TeaShop from './concrete-class/TeaShop';

export default function () {
    const maker = new TeaMaker()
    const shop = new TeaShop(maker)

    shop.takeOrder('with less sugar', 1)
    shop.takeOrder('with more milk', 2)
    shop.takeOrder('without sugar', 5)

    shop.serve()
}
