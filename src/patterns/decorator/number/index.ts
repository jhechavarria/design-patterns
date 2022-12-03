// Decorator Use Case Example Code

import Value from './concrete-class/value'
import Add from './concrete-class/add'
import Sub from './concrete-class/sub'

export default function () {
    const A = Value(1)
    const B = Value(2)
    const C = Value(5)

    console.log(Add(A, B).value)
    console.log(Add(A, 100).value)
    console.log(Sub(C, A).value)
    console.log(Sub(Add(C, B), A).value)
    console.log(Sub(100, 101).value)
    console.log(Add(Sub(Add(C, B), A), 100).value)
    console.log(Sub(123, Add(C, C)).value)
    console.log(Add(Sub(Add(C, 10), A), 100).value)
    console.log(A.value)
    console.log(B.value)
    console.log(C.value)
}
