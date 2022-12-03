import Observer from '../interface/Observer';
import JobPost from './JobPost';

export default class JobSeeker implements Observer {
    protected name: string

    constructor(name: string) {
        this.name = name
    }

    getName() {
        return this.name
    }

    notify(jobPost: JobPost) {
        console.log(`Salut ${this.name}! Cette offre vient d'être publiée: ${jobPost.getTitle()}`)
    }
}
