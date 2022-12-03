export default abstract class AbstractBuilder {
    build() {
        this.test()
        this.lint()
        this.assemble()
        this.deploy()
    }

    abstract test(): void
    abstract lint(): void
    abstract assemble(): void
    abstract deploy(): void
}
