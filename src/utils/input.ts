export async function input (message: string, callback?: (data: string) => void): Promise<string> {
    return new Promise((resolve, reject) => {
        process.stdout.write(message)
        process.stdin.on('data', (data: string) => {
            const res = data.toString().replace(/\n$/, "")
            if (callback) {
                callback(res)
            }
            resolve(res)
        })
    })
}

export async function inputInt (message: string, callback?: (data: number) => void): Promise<number> {
    return new Promise((resolve, reject) => {
        process.stdout.write(message)
        process.stdin.on('data', (data: string) => {
            const res = parseInt(data)
            if (callback) {
                callback(res)
            }
            resolve(res)
        })
    })
}

export async function inputFloat (message: string, callback?: (data: number) => void): Promise<number> {
    return new Promise((resolve, reject) => {
        process.stdout.write(message)
        process.stdin.on('data', (data: string) => {
            const res = parseFloat(data)
            if (callback) {
                callback(res)
            }
            resolve(res)
        })
    })
}
