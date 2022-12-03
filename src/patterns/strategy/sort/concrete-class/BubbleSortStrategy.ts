import SortStrategy from '../interface/SortStrategy';

export default class BubbleSortStrategy implements SortStrategy {
    sort<T>(array: T[]): T[] {
        console.log('Tri utilisant le tri à bulle')
        return array
    }
}
