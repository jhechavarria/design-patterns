import IExampleState from '../../interface/IExampleState'

export default class Running implements IExampleState {
    // A ConcreteState Subclass
    request() {
        console.log(`I am now Running`)
    }
}
