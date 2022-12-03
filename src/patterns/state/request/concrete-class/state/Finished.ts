import IExampleState from '../../interface/IExampleState'

export default class Finished implements IExampleState {
    // A ConcreteState Subclass
    request() {
        console.log(`I am now Finished`)
    }
}
