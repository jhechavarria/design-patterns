import TeaMaker from './TeaMaker';
import KarakTea from './KarakTea';

export default class TeaShop {
    protected teaMaker: TeaMaker
    protected orders: KarakTea[] = []

    constructor(teaMaker: TeaMaker) {
        this.teaMaker = teaMaker
    }

    takeOrder(teaType: string, table: number) {
        this.orders[table] = this.teaMaker.make(teaType)
    }

    serve() {
        for (const table in this.orders) {
            console.log('Serving tea to table #' + table)
        }
    }
}
