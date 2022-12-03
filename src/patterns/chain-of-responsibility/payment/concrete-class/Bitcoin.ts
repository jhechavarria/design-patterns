import AbstractAccount from '../abstraction/AbstractAccount';

export default class Bitcoin extends AbstractAccount {
    protected balance: number = 500
    protected name: string = 'Bitcoin'
}
