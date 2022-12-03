import AndroidBuilder from './concrete-class/AndroidBuilder';
import IosBuilder from './concrete-class/IosBuilder';

export default function () {
    const androidBuilder = new AndroidBuilder()
    const iosBuilder = new IosBuilder()

    console.log('Building Android')
    androidBuilder.build()

    console.log()

    console.log('Building iOS')
    iosBuilder.build()
}
