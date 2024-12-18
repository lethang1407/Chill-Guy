
import { cn } from '../../lib/utils';
import Logo from './logo';
import React from "react";
import { FaMountainSun } from "react-icons/fa6";
import Modal from './Modal';
import ModalButton from './ModalButton';
import SceneList from '../Scene/SceneList';
function Header() {
    return (
        <div className={cn("px-9 py-4  flex items-center  ")}>
            <Logo />
            <Modal>
                <Modal.Open opens="sceneList">
                    <ModalButton  icon={<FaMountainSun />}>              
                    </ModalButton>
                </Modal.Open>
                <Modal.Window name="sceneList" >
                    <SceneList onCloseModal={close}/>
                </Modal.Window>
            </Modal>

        </div>
    )
}

export default Header
