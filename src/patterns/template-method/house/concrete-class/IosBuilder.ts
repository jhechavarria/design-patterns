import AbstractBuilder from '../abstraction/AbstractBuilder';

export default class IosBuilder extends AbstractBuilder {
    test() {
        console.log('Running ios tests')
    }

    lint() {
        console.log('Linting the ios code')
    }

    assemble() {
        console.log('Assembling the ios build')
    }

    deploy() {
        console.log('Deploying ios build to server')
    }
}
