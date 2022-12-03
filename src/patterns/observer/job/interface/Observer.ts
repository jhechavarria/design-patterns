import JobPost from '../concrete-class/JobPost';

export default interface Observer {
    notify(jobPost: JobPost)
}
