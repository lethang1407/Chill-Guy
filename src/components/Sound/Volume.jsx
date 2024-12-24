import { cn } from "../../lib/utils";

function Volume({ isActive, isMuted }) {
    return (
      <span
        className={cn(
          "h-4 w-2", isMuted ? "filter-red-glow bg-slate-400" : isActive ? "bg-white filter-green-glow" : "bg-slate-400"
        )}
      ></span>
    );
  }
  
  export default Volume;