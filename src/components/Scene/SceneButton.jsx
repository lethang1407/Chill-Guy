import Icon from "../ui/Icon"
import Modal from "../ui/Modal"
import ModalButton from "../ui/ModalButton"
import SceneList from "./SceneList"

function SceneButton() {
    return (
        <Modal>
            <Modal.Open opens="sceneList">
                <ModalButton icon={<Icon name="MultiImage"/>} tooltip="Set Scene">
                </ModalButton>
            </Modal.Open>
            <Modal.Window name="sceneList" >
                <SceneList onCloseModal={close} />
            </Modal.Window>
        </Modal>
    )
}

export default SceneButton
