import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startPomodoro, stopPomodoro, resetPomodoro, setPomodoroTime, togglePomodoroMode } from "../../redux/actions";
import toast from "react-hot-toast";
import { cn } from "../../lib/utils";

function Countdown({minimized}) {
    const { time, isCounting, isPomodoroMode } = useSelector((state) => state.pomodoro);
    const dispatch = useDispatch();
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let timer;
        if (isCounting && time > 0) {
            timer = setInterval(() => {
                dispatch(setPomodoroTime(time - 1));
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isCounting, time, dispatch]);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const handleStartPomodoro = () => {
        if (time > 0) {
            dispatch(startPomodoro());
            toast.success("started!");
        }
    };

    const handleStopPomodoro = () => {
        dispatch(stopPomodoro());
    };

    const handleResetPomodoro = () => {
        dispatch(resetPomodoro());
    };

    const handleSetTime = () => {
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        dispatch(setPomodoroTime(totalSeconds));
    };

    const handleInputChange = (setter, value, max) => {
        if (value >= 0 && value <= max) {
            setter(value);
        }
    };

    const handleTogglePomodoroMode = () => {
        dispatch(togglePomodoroMode(!isPomodoroMode)); 
    };
    if (minimized) {
        return null; 
    }
    return (
        <div className={cn("overflow-y-auto h-[30vh]")} >
            <h2 className={cn("text-white text-center")}>🔥 Focus Boost Mode ⏱</h2>
            <h1 className={cn("text-white text-4xl font-bold")}>⏳ {formatTime(time)}</h1>
            <div className="mt-4">
                <button
                    className={`bg-${isPomodoroMode ? "red" : "green"}-500 text-white px-4 py-1 rounded`}
                    onClick={handleTogglePomodoroMode}
                >
                    {isPomodoroMode ?  "Chế độ Pomodoro":"Chế độ Tự thiết lập"}
                </button>
            </div>
            {isPomodoroMode ? null : (
                <div className={cn("flex gap-2 mt-4")}>
                    <input
                        type="number"
                        value={hours}
                        onChange={(e) => handleInputChange(setHours, Number(e.target.value), 24)}
                        placeholder="Giờ"
                        className={cn("w-16 border px-2 py-1 text-center rounded")}
                        min="0"
                        max="24"
                    />
                    <input
                        type="number"
                        value={minutes}
                        onChange={(e) => handleInputChange(setMinutes, Number(e.target.value), 59)}
                        placeholder="Phút"
                        className={cn("w-16 border px-2 py-1 text-center rounded")}
                        min="0"
                        max="59"
                    />
                    <input
                        type="number"
                        value={seconds}
                        onChange={(e) => handleInputChange(setSeconds, Number(e.target.value), 59)}
                        placeholder="Giây"
                        className={cn("w-16 border px-2 py-1 text-center rounded")}
                        min="0"
                        max="59"
                    />
                    <button
                        className={cn("bg-blue-500 text-white px-3 py-1 rounded")}
                        onClick={handleSetTime}
                    >
                        Set Time
                    </button>
                </div>
            )}
            <div className="flex gap-2 mt-4">
                <button
                    className={cn("bg-green-500 text-white px-4 py-1 rounded")}
                    onClick={handleStartPomodoro}
                >
                    Start
                </button>
                <button
                    className={cn("bg-yellow-500 text-white px-4 py-1 rounded")}
                    onClick={handleStopPomodoro}
                >
                    Stop
                </button>
                <button
                    className={cn("bg-red-500 text-white px-4 py-1 rounded")}
                    onClick={handleResetPomodoro}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Countdown;
