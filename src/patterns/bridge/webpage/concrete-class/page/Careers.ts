import WebPage from '../../interface/WebPage';
import Theme from '../../interface/Theme';

export default class Careers implements WebPage {
    protected theme: Theme

    constructor(theme: Theme) {
        this.theme = theme
    }

    getContent(): string {
        return `Careers page in ${this.theme.getColor()}`
    }
}
