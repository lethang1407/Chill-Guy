import React, { forwardRef } from 'react';
import { cn } from "../../lib/utils";

const StyleListMenu = forwardRef(({ position, children }, ref) => {
    return (
        <ul
            ref={ref}  // Gán ref vào component
            className={cn("fixed bg-stone-100 shadow-slate-800 p-2  transition-all duration-500 ease-in-out  shadow-md rounded-md")}
            style={{
                right: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            {children}
        </ul>
    );
});

export default StyleListMenu;
