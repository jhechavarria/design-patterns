import DarkTheme from './concrete-class/theme/DarkTheme';
import About from './concrete-class/page/About';
import Careers from './concrete-class/page/Careers';

export default function () {
    const theme = new DarkTheme()

    const about = new About(theme)
    const careers = new Careers(theme)

    console.log(about.getContent())
    console.log(careers.getContent())
}
