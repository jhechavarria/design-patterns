import User from './concrete-class/User';
import ChatRoom from './concrete-class/ChatRoom';

export default function () {
    const mediator = new ChatRoom()

    const john = new User('John', mediator)
    const jane = new User('Jane', mediator)

    john.send('Hi there!')
    jane.send('Hey!')
}
