import { type } from 'os'
import DBInstance from './DBInstance'

export default class DBConnection {
    static instance: DBConnection

    private dbInstance: DBInstance

    private constructor(dbInstance: DBInstance) {
        this.dbInstance = dbInstance
    }

    static getInstance(dbInstance?: DBInstance): DBConnection {
        if (!DBConnection.instance && dbInstance) {
            DBConnection.instance = new DBConnection(dbInstance)
        }

        return DBConnection.instance
    }

    type() {
        this.dbInstance.dbType()
    }

    query(sql: string) {
        this.dbInstance.query(sql)
    }

}
