import President from './concrete-class/President';

export default function () {
    const president = President.getInstance()
    
    president.getTitle()
}
