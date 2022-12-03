import AbstractBuilder from '../abstraction/AbstractBuilder';

export default class AndroidBuilder extends AbstractBuilder {
    test() {
        console.log('Running android tests')
    }

    lint() {
        console.log('Linting the android code')
    }

    assemble() {
        console.log('Assembling the android build')
    }

    deploy() {
        console.log('Deploying android build to server')
    }
}
