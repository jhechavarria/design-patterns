import Observable from '../interface/Observable';
import Observer from '../interface/Observer';
import JobPost from './JobPost';

export default class JobPostings implements Observable {
    protected observers: Observer[] = []

    notify(jobPost: JobPost) {
        this.observers.forEach((observer: Observer) => {
            observer.notify(jobPost)
        })
    }

    attach(observer: Observer) {
        this.observers.push(observer)
    }

    addJobPost(jobPost: JobPost) {
        this.notify(jobPost)
    }
}
