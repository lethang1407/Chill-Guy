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
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const dragStartRef = useRef(null);

    const handleMouseDown = (e) => {
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
                    "w-100px h-[50vh] fixed bg-stone-100 shadow-slate-800 p-2 rounded-md"
                )}
                style={{
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                }}
                onMouseDown={handleMouseDown}
            >
                  <div
                    className="cursor-move p-2 bg-gray-200 rounded-t-md"
                    style={{
                        userSelect: "none", // Ngăn chặn văn bản bị bôi đen khi kéo
                    }}
                    onMouseDown={handleMouseDown}
                >
                    <span>Drag Me</span>
                </div>
                <button
                    className={cn(
                        "filter-none p-2  rounded-md hover:text-white transition-all duration-100 absolute top-1 right-1"
                    )}
                    onClick={close}
                >
                    <Icon name={"Close"} className={"!filter-none text-red-500"} />
                </button>
                <div>{cloneElement(children, { onCloseModal: close })}</div>
            </div>
        </div>,
        document.body
    );
}

Board.Open = Open;
Board.Window = Window;

export default Board;
