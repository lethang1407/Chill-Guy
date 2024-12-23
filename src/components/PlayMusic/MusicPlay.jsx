import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../ui/Icon";
import { cn } from "../../lib/utils"
import { setPlaying, setVolume, setPause, setNext, setPrevious } from "../../redux/actions";
import VolumeSetting from "../ui/VolumeSetting";
function MusicPlay({videoId}) {
    const playerRef = useRef(null);
    const dispatch = useDispatch();
    const { pause } = useSelector((state) => state.audio); 
    const [isApiReady, setIsApiReady] = useState(false); 
    const [isLoading, setIsLoading] = useState(false);  
    const [error, setError] = useState(null); 
    const [player, setPlayer] = useState(null); 

    useEffect(() => {
        if (!window.YT) {
            const script = document.createElement("script");
            script.src = "https://www.youtube.com/iframe_api";
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                window.onYouTubeIframeAPIReady = () => setIsApiReady(true);
            };
            script.onerror = () => {
                setIsLoading(false); 
                setError("Failed to load YouTube API."); 
            };
        } else {
            setIsApiReady(true);
        }

        return () => {
            const scriptTag = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
            if (scriptTag) scriptTag.remove();
        };
    }, []);

    useEffect(() => {
        if (isApiReady && videoId) {
            const youtubePlayer = new window.YT.Player("youtube-player", {
                videoId: videoId,
                playerVars: {
                    autoplay: 1, 
                    loop: 1,      
                    playlist: videoId, 
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    fs: 0,
                    iv_load_policy: 3,
                    cc_load_policy: 0,
                    disablekb: 1,
                },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange,
                    onError: onPlayerError,
                },
            });

            playerRef.current = youtubePlayer; 
            setPlayer(youtubePlayer);
            return () => {
                youtubePlayer.destroy();
            };
        }
    }, [isApiReady, videoId]);

    const onPlayerReady = () => {
        if (player) {
            player.pauseVideo(); 
             dispatch(setPlaying(false));  
            dispatch(setPause(true));
            setIsLoading(true);
        }
    };
    const onPlayerError = (event) => {
        setIsLoading(false); 
        setError("Failed to load video."); 
    };
    const onPlayerStateChange = (event) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
            dispatch(setPlaying(true)); 
            dispatch(setPause(false)); 
        } else if (event.data === window.YT.PlayerState.PAUSED) {
            dispatch(setPlaying(false)); 
            dispatch(setPause(true)); 
        }
        if (event.data === window.YT.PlayerState.ENDED) {
            player.playVideo();  
        }
    };

    const handlePlayPause = () => {
        if (player) {
            if (pause) {
                player.playVideo();
                dispatch(setPause(false)); 
            } else {
                player.pauseVideo();
                dispatch(setPause(true)); 
            }
        }
    };

   
    const handleNext = () => {
        dispatch(setNext()); 
    };

    const handlePrevious = () => {
        dispatch(setPrevious()); 
    };

    return (
        <>
         {isLoading && <div>Loading...</div>}  {/* Hiển thị loading khi đang tải */}
            {error && <div>Error: {error}</div>}  {/* Hiển thị thông báo lỗi nếu có */}
            {!isLoading && !error && (
                <>
                    <div ref={playerRef} id="youtube-player" style={{ width: '0', height: '0' }}></div>
                    <div className={cn("flex items-center gap-2")}>
                        <button onClick={handlePlayPause}>
                            <Icon name={pause ? "Play" : "Pause"} />
                        </button>
                        <button onClick={handlePrevious}><Icon name={"Previous"} /></button>
                        <button onClick={handleNext}><Icon name={"Next"} /></button>
                        <VolumeSetting player={player} />
                    </div>
                </>
            )}
        </>
    );

}

export default MusicPlay
