import Interviewer from '../../interface/Interviewer';

export default class CommunityExecutive implements Interviewer {
    askQuestion(): void {
        console.log('Asking about community building')
    }
}
