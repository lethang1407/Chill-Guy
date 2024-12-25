import { useDispatch } from "react-redux";
import { addVideoUrl, setVideoUrl } from "../../redux/actions";
import { useState } from "react";
import { cn } from "../../lib/utils";
import ReactPlayer from "react-player";



function VideoInput() {
    const dispatch = useDispatch();
    const [inputUrl, setInputUrl] = useState('');
    const [inputName, setInputName] = useState('');
   
    const handleSetUrl = () => {
        if (inputUrl && inputName) {
            dispatch(setVideoUrl(inputUrl));
            dispatch(addVideoUrl({ url: inputUrl, name: inputName }));
        } else {
            alert("Please provide both URL and Name");
        }
    };
    return (
        <div className={cn("flex items-center justify-center")}>
             <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                className={cn("mr-2 w-[5vw]")}
                placeholder="Tên video"
            />
            <input type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className={cn("mr-2")}
                placeholder="Nhập YouTube video URL" />
            <button
                onClick={handleSetUrl}
                className={cn("bg-blue-500 text-white px-4 py-2 rounded")}>Set URL</button>

        </div>
    )
}

export default VideoInput
