import { cn } from "../../lib/utils";
const IconList = [
    {
        name: "MultiImage",
        path: "M24 2H4v16h20V2zM6 16V4h16v12H6zM2 4H0v18h20v-2H2V4zm12 2h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm0 0v2H8v-2h2zm8-2h-2V8h2v2zm0 0h2v2h-2v-2zM8 6h2v2H8V6z"
    },
    {
        name: "Play",
        path: "M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z"
    },
    {
        name: "Pause",
        path: "M10 4H5v16h5V4zm9 0h-5v16h5V4z"

    },
    {
        name: "Previous",
        path: "M6 4h2v16H6V4zm12 0h-2v2h-2v3h-2v2h-2v2h2v3h2v2h2v2h2V4z"
    },
    {
        name: "Next",
        path: "M6 4h2v2h2v2h2v2h2v4h-2v2h-2v2H8v2H6V4zm12 0h-2v16h2V4z"
    },
    {
        name: "Music",
        path:"M8 4h12v16h-8v-8h6V8h-8v12H2v-8h6V4zm0 10H4v4h4v-4zm10 0h-4v4h4v-4z" 
    },
    {
        name: "Volume",
        path:"M11 2h2v20h-2v-2H9v-2h2V6H9V4h2V2zM7 8V6h2v2H7zm0 8H3V8h4v2H5v4h2v2zm0 0v2h2v-2H7zm10-6h-2v4h2v-4zm2-2h2v8h-2V8zm0 8v2h-4v-2h4zm0-10v2h-4V6h4z"
    },
    {
        name: "Mute",
        path: "M13 2h-2v2H9v2H7v2H3v8h4v2h2v2h2v2h2V2zM9 18v-2H7v-2H5v-4h2V8h2V6h2v12H9zm10-6.777h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0h2v-2h-2v2z"
    }
]
function Icon({name}) {
    return (
        <span className={cn("w-6 h-6 text-white-500 filter-green-glow")}>
        <svg className={cn("w-7 h-7 text-white filter-green-glow")} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d={IconList.find((item) => item.name === name).path}></path>
        </svg>
        </span>
    )
}

export default Icon
