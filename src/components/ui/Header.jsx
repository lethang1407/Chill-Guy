
import { cn } from '../../lib/utils';
import MusicButton from '../PlayMusic/MusicButton';
import SceneButton from '../Scene/SceneButton';
import Logo from './logo';
import React from "react";
import Menus from './Menus';
import Calendar from '../Calendar/Calendar';
import TodoListContent from '../TodoList/TodoListContent';
import Time from '../Time/Time';
import SoundModal from '../Sound/SoundModal';
import Expand from '../Expand/Expand';

function Header() {
    return (
        <div className={cn("px-9  flex items-center justify-between  ")}>
            <Logo />
            <div className={cn("flex items-center justify-end ")}>
            <Expand />
            <SceneButton />
            <Menus>
                <MusicButton />
            </Menus>
            <SoundModal  />
            <Calendar />
            <TodoListContent />
            <Time />
            
            </div>
        </div>
    )
}

export default Header
