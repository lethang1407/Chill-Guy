import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import Scenes from './ui/Scenes';
import Music from './ui/Music';
import Header from './ui/Header';

function AppLayOut() {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); 
        };
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={cn("relative min-h-screen")}>
            <Scenes />
            <Header />
            <Music />
            {isMobileView && (
                <div
                    className={cn(
                        "fixed inset-0 z-50 bg-black/70 flex items-center justify-center backdrop-blur-md"
                    )}
                >
                    <img
                        src="/responesive.png"
                        alt="mobile"
                        className="w-1/2 h-auto rounded-md"
                    />
                </div>
            )}
        </div>
    );
}

export default AppLayOut;
