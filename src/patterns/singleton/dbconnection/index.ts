import DBInstance from './DBInstance';
import DBConnection from './DBConnection';

const postgresInstance = new DBInstance({
    type: 'postgres',
    username: 'user',
    password: 'P@$$w0Rd'
})

const mySqlInstance = new DBInstance({
    type: 'mysql',
    username: 'user',
    password: 'P@$$w0Rd'
})

export default function () {
    const connecttion = DBConnection.getInstance(postgresInstance)

    connecttion.type()
    connecttion.query('SELECT * FROM order o INNER JOIN user u ON u.id = o.user_id WHERE u.username = "user"')

    const otherConnection = DBConnection.getInstance(mySqlInstance)

    otherConnection.type()
    otherConnection.query('DELETE FROM user qhere username = "user"')
}
