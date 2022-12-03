import AnimalOperation from './AnimalOperation';

export default interface Animal {
    accept(operation: AnimalOperation): void
}
