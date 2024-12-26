import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import Scenes from './ui/Scenes';
import Music from './ui/Music';
import Header from './ui/Header';

function AppLayOut() {
    const [isMobileView, setIsMobileView] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const handleStart = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsStarted(true);
        }, 300); 
    };
  
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                handleStart();
            }
        };
        handleResize(); 
        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={cn("relative min-h-screen")}>
            {!isStarted && (
                <div
                    className={cn(
                        "fixed inset-0 z-50 flex items-center justify-center bg-black/50",  isAnimating ? "animate-scaleOut" : " animate-scaleIn"
                    )}
                >
                    <div
                        className={cn(
                            "flex justify-center items-center flex-col gap-4"
                        )}
                    >
                        <img src="/logowhite.png" alt="logo" className={cn("w-[50%] h-[50%]")} />
                        <h1 className={cn("text-white text-2xl animate-blink")}>Press Enter to start</h1>
                    </div>
                </div>
            )}
                    <Scenes />
                   {isStarted && (
                       <>
                        <Header />
                        <Music />
                       </>
                   )}
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
