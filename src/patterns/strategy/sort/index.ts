import Sorter from './concrete-class/Sorter';
import BubbleSortStrategy from './concrete-class/BubbleSortStrategy';
import QuickSortStrategy from './concrete-class/QuickSortStrategy';

export default function () {
    const bubbleSort = new BubbleSortStrategy()
    const quickSort = new QuickSortStrategy()

    const sorter = new Sorter(bubbleSort)

    sorter.sort([])
}
