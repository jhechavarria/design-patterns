export default class JobPost {
    protected title: string

    constructor(title: string) {
        this.title = title
    }

    getTitle() {
        return this.title
    }
}
