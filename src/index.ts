import { input } from './utils/input'

(async function() {
    const fs = require('fs')

    const patterns = fs.readdirSync('./src/patterns')
    const aliases: { [key: string]: string } = {
        cor: 'chain-of-responsibility',
        tm: 'template-method',
        af: 'abstract-factory',
    }

    const has = function(array: string[], search: string): string | undefined {
        return array.find((pat: string) => pat.toLowerCase().includes(search.toLowerCase()))
    }

    const unalias = function(pattern: string): string {
        return aliases[pattern] ?? pattern
    }

    console.log(`[ ${patterns.toString().replace('\n', '')} ]`)
    const pattern = has(patterns, unalias(await input('Choose a pattern : ')))

    if (!pattern) {
        console.log(`Pattern not found. Please choose between these: \n${patterns.join('\n')}`)
        process.exit()
    } else {
        const mod: any = () => import('./patterns/' + pattern)

        mod().then(async (def: { default: { [key: string]: Function }}) => {
            const examples = Object.keys(def.default)
            const list = examples.toString().replace('\n', '')
            console.log()
            console.log(list)
            const example = has(examples, await input(`Choose an example for pattern ${pattern} : `))
            if (!example) {
                console.log(`Example not found in pattern ${pattern}. Please choose between these :`)
                console.log(list)
            } else {
                console.log()
                def.default[example]()
            }
            process.exit()
        })
    }
})()
