import Door from '../interface/door';

export default class Security {
    protected door: Door

    constructor(door: Door) {
        this.door = door
    }

    open(password: string) {
        if (this.authenticate(password)) {
            this.door.open()
        } else {
            console.log("Eh non! Ce n'est pas possible.")
        }
    }

    close() {
        this.door.close()
    }

    private authenticate(password: string) {
        return password === '$ecr@t'
    }
}
