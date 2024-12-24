import { useState } from "react";
import { cn } from "../../lib/utils"
import VideoInput from "./VideoInput"
import VideoPlayer from "./VideoPlayer"


function YouTube({ minimized }) {

    return (
        <div>
            {minimized ? null : (
                <>
                    <h1 className={cn("text-xl  text-center")}>🎈 Trình phát video YouTube 🔥</h1>
                    <VideoInput />
                </>
            )}
            <VideoPlayer isMinimized={minimized} />
        </div>
    )
}

export default YouTube
