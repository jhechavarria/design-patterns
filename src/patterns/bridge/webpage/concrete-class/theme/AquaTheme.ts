import Theme from '../../interface/Theme';

export default class AquaTheme implements Theme {
    protected color: string = 'Light Blue'

    getColor(): string {
        return this.color
    }
}
