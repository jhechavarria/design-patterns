import IExampleState from '../interface/IExampleState'
import ExampleState from '../constant/ExampleState'
import Started from './state/Started'
import Running from './state/Running'
import Finished from './state/Finished'

export default class StateContext implements IExampleState {
    #state: ExampleState

    constructor() {
        this.#state = ExampleState.Initializing
    }

    public get state() {
        return this.#state
    }

    public set state(value: ExampleState) {
        switch (value) {
            case ExampleState.Started:
                this.request = Started.prototype.request
                break
            case ExampleState.Running:
                this.request = Running.prototype.request
                break
            case ExampleState.Finished:
                this.request = Finished.prototype.request
                break
        }
        this.#state = value
    }

    request() {
        // Does nothing until state changes, when then
        // this method handle is reassigned to a different
        // concrete states request method
    }
}