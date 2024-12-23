import { cn } from '../lib/utils';
import Scenes from './ui/Scenes';
import Music from './ui/Music';
import Header from './ui/header';

function AppLayOut() {
    return (
        <div className={cn(" relative min-h-screen ")}>
            <Scenes />
            <Header />
            <Music />
        </div>
    );
}

export default AppLayOut;
