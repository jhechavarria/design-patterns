const timestamps: { [key: string]: number } = {}

export function register(name: string) {
    timestamps[name] = new Date().getTime()
}

export function diff(t1: string, t2: string) {
    if (!timestamps[t1] || !timestamps[t2]) {
        throw 'Both timestamps must be set'
    }
    return (timestamps[t2] - timestamps[t1]) + 'ms'
}

export function diffNow(t1: string) {
    if (!timestamps[t1]) {
        throw 'Both timestamps must be set'
    }
    const t2 = new Date().getTime()
    return (t2 - timestamps[t1]) + 'ms'
}

export default {
    register,
    diff,
    diffNow
}