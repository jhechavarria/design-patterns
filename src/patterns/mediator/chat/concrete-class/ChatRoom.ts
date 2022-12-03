import ChatRoomMediator from '../interface/ChatRoomMediator ';
import User from './User';

// Mediator
export default class ChatRoom implements ChatRoomMediator {
    showMessage(user: User, message: string) {
        const time = new Date().toLocaleDateString()
        const sender = user.getName()

        console.log(`${time} [${sender}]: ${message}`)
    }
}
