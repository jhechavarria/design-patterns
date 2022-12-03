import NumberWheel from './concrete-class/NumberWheel'

export default function () {
    // The Client
    const NUMBERWHEEL = new NumberWheel()

    for (let i = 0; i < 22; i++) {
        console.log(NUMBERWHEEL.next() + ' ')
    }
}
