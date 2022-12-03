import ChatRoomMediator from '../interface/ChatRoomMediator ';

export default class User {
    protected name: string
    protected chatMediator: ChatRoomMediator

    constructor(name: string, chatMediator: ChatRoomMediator) {
        this.name = name
        this.chatMediator = chatMediator
    }

    getName() {
        return this.name
    }

    send(message: string) {
        this.chatMediator.showMessage(this, message)
    }
}
