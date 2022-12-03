import Theme from '../../interface/Theme';

export default class DarkTheme implements Theme {
    protected color: string = 'Dark Black'

    getColor(): string {
        return this.color
    }
}
