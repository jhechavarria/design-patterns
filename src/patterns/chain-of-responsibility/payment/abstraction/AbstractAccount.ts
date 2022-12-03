export default abstract class AbstractAccount {
    protected balance!: number
    protected successor?: AbstractAccount
    protected name!: string

    setNext(successor: AbstractAccount) {
        this.successor = successor
    }

    pay(amount: number) {
        if (this.canPay(amount)) {
            console.log(`Could pay ${amount}$ with : ${this.name}`)
            console.log(`Balance went from ${this.balance}$ to ${this.balance - amount}$`)
        } else if (this.successor) {
            this.successor.pay(amount)
        } else {
            console.log(`Payment refused for amount ${amount}$`)
        }
    }

    canPay(amount: number): boolean {
        return this.balance >= amount
    }
}
