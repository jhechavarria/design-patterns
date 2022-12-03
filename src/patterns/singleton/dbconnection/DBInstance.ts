type Credentials = { username: string, password: string, type: string }

export default class DBInstance {
    private type?: string
    private authenticated: boolean = false

    constructor(credentials?: Credentials) {
        if (credentials) {
            this.connect(credentials)
        }
    }

    connect(credentials: Credentials) {
        if (credentials.username && credentials.password && credentials.type) {
            this.type = credentials.type
            this.authenticated = true
            console.log('You were authenticated')
        } else {
            console.log('Invalid credentials')
        }
    }

    get isAuthorized() {
        return this.authenticated
    }

    dbType() {
        this.requireAuth()
        console.log(`I am a ${this.type} database`)
    }

    query(sql: string) {
        this.requireAuth()
        console.log('Executing query :', sql)
    }

    private requireAuth() {
        if (!this.authenticated) {
            throw 'You must be authenticated to execute a query'
        }
    }
}
