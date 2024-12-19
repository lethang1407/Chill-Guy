
import { cn } from '../../lib/utils';
import MusicButton from '../PlayMusic/MusicButton';
import SceneButton from '../Scene/SceneButton';
import Logo from './logo';
import React from "react";
import Menus from './Menus';

function Header() {
    return (
        <div className={cn("px-9 py-4  flex items-center  ")}>
            <Logo />
            <SceneButton />
            <Menus>
                <MusicButton />
            </Menus>
        </div>
    )
}

export default Header
