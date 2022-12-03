import WebPage from '../../interface/WebPage';
import Theme from '../../interface/Theme';

export default class About implements WebPage {
    protected theme: Theme

    constructor(theme: Theme) {
        this.theme = theme
    }

    getContent(): string {
        return `About page in ${this.theme.getColor()}`
    }
}
