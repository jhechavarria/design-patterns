import Observer from './Observer';
import JobPost from '../concrete-class/JobPost';

export default interface Observable {
    attach(observer: Observer)
    notify(jobPost: JobPost)
}
