import SortStrategy from '../interface/SortStrategy';

export default class Sorter implements SortStrategy {
    protected sorter: SortStrategy

    constructor(sorter: SortStrategy) {
        this.sorter = sorter
    }

    sort<T>(array: T[]): T[] {
        return this.sorter.sort(array)
    }
}
