import AbstractAccount from '../abstraction/AbstractAccount';

export default class Bank extends AbstractAccount {
    protected balance: number = 100
    protected name: string = 'Bank'
}
