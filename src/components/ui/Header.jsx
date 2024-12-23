
import { cn } from '../../lib/utils';
import MusicButton from '../PlayMusic/MusicButton';
import SceneButton from '../Scene/SceneButton';
import Logo from './logo';
import React from "react";
import Menus from './Menus';
import Calendar from '../Calendar/Calendar';
import TodoListContent from '../TodoList/TodoListContent';

function Header() {
    return (
        <div className={cn("px-9  flex items-center justify-between  ")}>
            <Logo />
            <div className={cn("flex items-center justify-end ")}>
            <SceneButton />
            <Menus>
                <MusicButton />
            </Menus>
            <Calendar />
            <TodoListContent />
            
            </div>
        </div>
    )
}

export default Header
