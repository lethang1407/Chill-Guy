import { cn } from "../../lib/utils";
const IconList = [
    {
        name: "MultiImage",
        path: "M24 2H4v16h20V2zM6 16V4h16v12H6zM2 4H0v18h20v-2H2V4zm12 2h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm0 0v2H8v-2h2zm8-2h-2V8h2v2zm0 0h2v2h-2v-2zM8 6h2v2H8V6z"
    },
    {
        name: "Play",
        path: "M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z"
    }
]
function Icon({nums}) {
    return (
        <svg className={cn("w-5 h-5 text-white-500")} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d={IconList[nums].path}></path>
        </svg>
    )
}

export default Icon
