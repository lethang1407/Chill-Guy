import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 60000); 
        return () => clearInterval(interval);
      }, []);

  return (
    <div className={cn("text-white p-2 bg-stone-900/80 rounded flex items-center text-xl")}>
      <p className={cn("filter-green-glow text-2xl")}>{time}</p>
    </div>
  );
}

export default Clock
