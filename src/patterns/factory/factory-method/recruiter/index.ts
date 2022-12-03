import DevelopmentManager from './concrete-class/hiring-manager/DevelopmentManager';
import MarketingManager from './concrete-class/hiring-manager/MarketingManager';

export default function () {
    const devManager = new DevelopmentManager()
    devManager.takeInterview()

    const marketingManager = new MarketingManager()
    marketingManager.takeInterview()
}
