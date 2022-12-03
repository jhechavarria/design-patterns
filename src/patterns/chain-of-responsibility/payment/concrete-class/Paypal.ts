import AbstractAccount from '../abstraction/AbstractAccount';

export default class Paypal extends AbstractAccount {
    protected balance: number = 250
    protected name: string = 'Paypal'
}
