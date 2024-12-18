import { cloneElement, createContext, useContext, useState } from "react";
import { useOutSideClick } from "../../hooks/useOutSideClick";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { cn } from '../../lib/utils';

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
    return cloneElement(children, { onClick: (e) => {
        e.stopPropagation();
        open(openWindowName)} });
}
function Window({ children,name }) {
    const { openName, close } = useContext(ModalContext);
    const ref = useOutSideClick(close);
    if (name !== openName) return null;
    return createPortal(
        <div className={cn("fixed inset-0 bg-black/50 w-full h-screen z-50 transition-all duration-500 ease-in-out backdrop-blur-sm")}>
            <div className={cn("w-[90%] h-[90%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-100 shadow-slate-800 p-2 rounded-md transition-all duration-500 ease-in-out ")} ref={ref}>
                <button className={cn("p-2 hover:bg-red-500 rounded-md hover:text-white transition-all duration-100 absolute top-1 right-1  ")} onClick={close}><IoClose /></button>
                <div>{cloneElement(children, { onCloseModal: close })}</div>
            </div>
        </div>,
        document.body
    );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal