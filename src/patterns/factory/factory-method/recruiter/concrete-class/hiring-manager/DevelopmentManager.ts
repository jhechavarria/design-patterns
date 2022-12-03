import HiringManager from '../../abstraction/HiringManager';
import Interviewer from '../../interface/Interviewer';
import Developer from '../interviewer/Developer';

export default class DevelopmentManager extends HiringManager {
    makeInterviewer(): Interviewer {
        return new Developer()
    }
}
