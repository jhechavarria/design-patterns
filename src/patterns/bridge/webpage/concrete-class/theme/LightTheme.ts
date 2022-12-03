import Theme from '../../interface/Theme';

export default class LightTheme implements Theme {
    protected color: string = 'Off White'

    getColor(): string {
        return this.color
    }
}
