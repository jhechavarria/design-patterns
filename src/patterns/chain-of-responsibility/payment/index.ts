import { inputFloat } from '../../../utils/input'
import Bank from './concrete-class/Bank';
import Paypal from './concrete-class/Paypal';
import Bitcoin from './concrete-class/Bitcoin';

export default async function () {
    const amount = await inputFloat('Enter amount to pay : ')
    const bank = new Bank()
    const paypal = new Paypal()
    const bitcoin = new Bitcoin()

    bank.setNext(paypal)
    paypal.setNext(bitcoin)

    bank.pay(amount)

    process.exit()
}
