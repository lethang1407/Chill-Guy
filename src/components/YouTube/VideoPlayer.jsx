import { useDispatch, useSelector } from "react-redux";
import { togglePlaying } from "../../redux/actions";
import ReactPlayer from "react-player";
import { cn } from "../../lib/utils";


function VideoPlayer({ isMinimized }) {
    const dispatch = useDispatch();
    const { url, playing } = useSelector((state) => state.videourl);

     

    // Hàm bật/tắt video
    const handlePlayPause = () => {
        dispatch(togglePlaying());
    };

    // Kiểm tra URL hợp lệ
    const isValidUrl = ReactPlayer.canPlay(url);

    return (
        <div className={cn("flex flex-col items-center space-y-4 p-3")}>
           
            {isValidUrl ? (
                <ReactPlayer
                    url={url}
                    playing={playing}
                    muted={false} 
                    width={isMinimized ? "0px" : "100%"} 
                    height={isMinimized ? "0px" : "100%"}
                    onEnded={handlePlayPause} 
                />
            ) : (
                <p className={cn("text-red-500 text-center font-bold")}>
                    URL không hợp lệ. Vui lòng nhập một URL hợp lệ.
                </p>
            )}
        </div>
    );
}

export default VideoPlayer;
