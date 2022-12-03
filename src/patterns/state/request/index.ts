import ExampleState from './constant/ExampleState'
import StateContext from './concrete-class/StateContext'

export default function () {
    // The Client
    const STATE_CONTEXT = new StateContext()
    console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state)
    STATE_CONTEXT.state = ExampleState.Started
    STATE_CONTEXT.request()
    STATE_CONTEXT.state = ExampleState.Running
    STATE_CONTEXT.request()
    STATE_CONTEXT.state = ExampleState.Finished
    STATE_CONTEXT.request()
    STATE_CONTEXT.state = ExampleState.Started
    STATE_CONTEXT.request()
    STATE_CONTEXT.state = ExampleState.Running
    STATE_CONTEXT.request()
    STATE_CONTEXT.state = ExampleState.Finished
    STATE_CONTEXT.request()
}
