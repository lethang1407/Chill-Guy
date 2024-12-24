import { useDispatch } from "react-redux";
import { setVideoUrl } from "../../redux/actions";
import { useState } from "react";
import { cn } from "../../lib/utils";



function VideoInput() {
    const dispatch = useDispatch();
    const [inputUrl, setInputUrl] = useState('');
    const handleSetUrl = () => {
        dispatch(setVideoUrl(inputUrl));
    }
    return (
        <div className={cn("flex items-center justify-center")}>
            <input type="text" 
            value={inputUrl} 
            onChange={(e) => setInputUrl(e.target.value)} 
            className={cn("mr-2")} 
            placeholder="Enter YouTube video URL" />
            <button 
            onClick={handleSetUrl} 
            className={cn("bg-blue-500 text-white px-4 py-2 rounded")}>Set URL</button>
            
        </div>
    )
}

export default VideoInput
