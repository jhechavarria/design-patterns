import SortStrategy from '../interface/SortStrategy';

export default class QuickSortStrategy implements SortStrategy {
    sort<T>(array: T[]): T[] {
        console.log('Tri utilisant le tri rapide')
        return array
    }
}
