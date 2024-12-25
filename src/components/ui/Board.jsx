import { cloneElement, createContext, useContext, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/utils";
import Icon from "./Icon";

const BoardContext = createContext();

function Board({ children }) {
    const [openName, setOpenName] = useState("");
    const close = () => setOpenName("");
    const open = setOpenName;
    return (
        <BoardContext.Provider value={{ openName, open, close }}>
            {children}
        </BoardContext.Provider>
    );
}

function Open({ children, opens: openWindowName }) {
    const { open } = useContext(BoardContext);
    return cloneElement(children, {
        onClick: (e) => {
            e.stopPropagation();
            open(openWindowName);
        },
    });
}

function Window({ children, name }) {
    const { openName, close } = useContext(BoardContext);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [dragging, setDragging] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const dragStartRef = useRef(null);

    const handleMouseDown = (e) => {
        e.stopPropagation();
        setDragging(true);
        dragStartRef.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;
        setPosition({
            x: e.clientX - dragStartRef.current.x,
            y: e.clientY - dragStartRef.current.y,
        });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    if (name !== openName) return null;

    return createPortal(
        <div
            className={cn(
                "fixed h-screen z-50"
            )}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div
                className={cn(
                    " fixed bg-slate-700/80 shadow-slate-800 p-2 rounded-md", minimized ? "h-[10vh] w-[30vh]" : "h-[40vh] w-100px"
                )}
                style={{
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                }}

            >
                <div
                    className="cursor-move p-2 bg-gray-500 rounded-t-md text-white"
                    style={{
                        userSelect: "none",
                    }}
                    onMouseDown={handleMouseDown}
                >
                    <span>Drag Me</span>
                </div>
                <button
                    className="absolute top-1 right-10 p-2 hover:bg-gray-300 rounded"
                    onClick={() => setMinimized(!minimized)}
                >
                    {minimized ? <Icon name={"Maximize"} /> : <Icon name={"Minimize"} />}
                </button>
                {!minimized && (
                    <button
                    className={cn(
                        " p-2 rounded-md  transition-all duration-100 absolute top-1 right-1"
                    )}
                    onClick={close}
                >
                    <Icon name={"Close"} className={"filter-red-glow text-white rounded-sm"} />
                </button>
                )}
                <div >{cloneElement(children, {
                    onCloseModal: close,
                    minimized,
                })}</div>
            </div>
        </div>,
        document.body
    );
}

Board.Open = Open;
Board.Window = Window;

export default Board;
