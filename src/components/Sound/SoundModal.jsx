import Board from "../ui/Board"
import Icon from "../ui/Icon"
import ModalButton from "../ui/ModalButton"
import Sound from "./Sound"

function SoundModal() {
    return (
       <Board>
            <Board.Open opens="soundModal">
                <ModalButton icon={<Icon name="Rain" />} /> 
            </Board.Open>
            <Board.Window name="soundModal"> 
                <Sound />
            </Board.Window>
       </Board>
    )
}

export default SoundModal
