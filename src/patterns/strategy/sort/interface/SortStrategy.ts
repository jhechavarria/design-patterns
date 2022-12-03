export default interface SortStrategy {
    sort<T>(array: T[]): T[]
}
