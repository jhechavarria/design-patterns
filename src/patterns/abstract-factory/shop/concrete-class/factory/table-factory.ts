import SmallTable from '../table/small-table';
import MediumTable from '../table/medium-table';
import BigTable from '../table/big-table';
import ITable from '../../interface/ITable';

export default class TableFactory {
    static getTable(table: string): ITable {
        if (table === 'BigTable') {
            return new BigTable()
        } else if (table === 'MediumTable') {
            return new MediumTable()
        } else if (table === 'SmallTable') {
            return new SmallTable()
        } else {
            throw new Error('No Table Found')
        }
    }
}
