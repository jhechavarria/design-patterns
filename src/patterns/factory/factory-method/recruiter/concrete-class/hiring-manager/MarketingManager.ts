import HiringManager from '../../abstraction/HiringManager';
import Interviewer from '../../interface/Interviewer';
import CommunityExecutive from '../interviewer/CommunityExecutive';

export default class MarketingManager extends HiringManager {
    makeInterviewer(): Interviewer {
        return new CommunityExecutive()
    }
}
