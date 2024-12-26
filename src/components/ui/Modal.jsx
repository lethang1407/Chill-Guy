import { cloneElement, createContext, useContext, useState } from "react";
import { useOutSideClick } from "../../hooks/useOutSideClick";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { cn } from '../../lib/utils';
import Icon from "./Icon";
import ModalButton from "./ModalButton";

const ModalContext = createContext();
function Modal({ children }) {
    const [openName, setOpenName] = useState("");
    const close = () => setOpenName("");
    const open = setOpenName;
    return (
        <ModalContext.Provider value={{ openName, open, close }}>
            {children}
        </ModalContext.Provider>
    );
}
function Open({ children, opens: openWindowName }) {
    const { open } = useContext(ModalContext);
    return cloneElement(children, {
        onClick: (e) => {
            e.stopPropagation();
            open(openWindowName)
        }
    });
}
function Window({ children, name }) {
    const { openName, close } = useContext(ModalContext);
    const ref = useOutSideClick(close);
    const [isClosing, setIsClosing] = useState(false);
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            close();
            setIsClosing(false);
        }, 500);
    };
    if (name !== openName && !isClosing) return null;
    return createPortal(
        <div
            className={cn(
                "fixed inset-0 bg-black/50 w-full h-screen z-50 transition-opacity duration-500 ease-in-out backdrop-blur-sm",
                isClosing ? "opacity-0" : "opacity-100 animate-scaleIn"
            )}
        >
            <div
                className={cn(
                    "w-[90%] h-[90%] fixed top-1/2 left-1/2 bg-slate-500/70 shadow-slate-800 p-2 rounded-md transition-transform duration-500 ease-in-out",
                    isClosing
                        ? "transform scale-0 -translate-x-1/2 -translate-y-1/2 "
                        : "transform scale-100 -translate-x-1/2 -translate-y-1/2 "
                )}
                ref={ref}
            >
                <div>
                    <div className={cn("flex justify-end")}>
                        <ModalButton
                            className={cn(
                                "filter-none p-2 hover:bg-red-500 bg-black rounded-md text-white transition-all duration-100 absolute top-1 right-4"
                            )}
                            onClick={handleClose}
                            tooltip={"Close"}
                        >
                            <Icon name={"Close"} className={"!filter-none text-white"} />
                        </ModalButton>
                    </div>
                    <div>{cloneElement(children, { onCloseModal: close })}</div>
                </div>
            </div>
        </div>,
        document.body
    );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal