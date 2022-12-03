import Interviewer from '../../interface/Interviewer';

export default class Developer implements Interviewer {
    askQuestion(): void {
        console.log('Asking about design patterns')
    }
}
