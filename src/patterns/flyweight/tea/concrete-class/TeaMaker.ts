import KarakTea from './KarakTea';

export default class TeaMaker {
    protected availableTea: { [key: string]: KarakTea } = {}

    make(preference: string): KarakTea {
        if (!this.availableTea[preference]) {
            this.availableTea[preference] = new KarakTea()
        }
        return this.availableTea[preference]
    }
}
