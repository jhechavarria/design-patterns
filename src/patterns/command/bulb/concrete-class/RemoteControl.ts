import Command from '../interface/Command';

export default class RemoteControl {
    submit(command: Command) {
        command.execute()
    }
}
