export default class President {
    static instance: President

    private constructor() {}

    static getInstance () {
        if (!President.instance) {
            President.instance = new President()
        }

        return President.instance
    }

    getTitle() {
        console.log('I am mister President !')
    }
}
