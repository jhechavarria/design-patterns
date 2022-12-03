import IExampleState from '../../interface/IExampleState'

export default class Started implements IExampleState {
    // A ConcreteState Subclass
    request() {
        console.log(`I am now Started`)
    }
}
