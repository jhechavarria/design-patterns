import User from "../concrete-class/User";

export default interface ChatRoomMediator  {
    showMessage(user: User, message: string)
}
