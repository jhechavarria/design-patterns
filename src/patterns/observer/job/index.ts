import JobPost from './concrete-class/JobPost';
import JobSeeker from './concrete-class/JobSeeker';
import JobPostings from './concrete-class/JobPostings';

export default function () {
    const john = new JobSeeker('John')
    const jane = new JobSeeker('Jane')

    const jobPostings = new JobPostings()
    jobPostings.attach(john)
    jobPostings.attach(jane)

    const jobPost = new JobPost('Software Engineer')

    jobPostings.addJobPost(jobPost)
}
