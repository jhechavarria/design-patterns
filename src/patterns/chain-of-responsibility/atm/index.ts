
// An ATM Dispenser that dispenses denominations of notes

import { inputFloat } from '../../../utils/input'
import ATMDispenserChain from './concrete-class/atm-dispenser-chain'

export default async function () {
    const ATM = new ATMDispenserChain()
    const amount = await inputFloat('Enter amount to withdrawal : ')
    if (amount < 10 || amount % 10 != 0) {
        console.log(
            'Amount should be positive and in multiple of 10s.'
        )
    } else {
        // process the request
        ATM.chain1.handle(amount)
        console.log('Now go spoil yourself')
        process.exit()
    }
}
