import Interviewer from '../interface/Interviewer';

export default abstract class HiringManager {
    // Factory method
    abstract makeInterviewer(): Interviewer

    takeInterview() {
        const interviewr = this.makeInterviewer()

        interviewr.askQuestion()
    }
}
