import Icon from "../ui/Icon"
import Board from "../ui/Board"
import ModalButton from "../ui/ModalButton"
import Countdown from "./Countdown"

function Time() {
    return (
        <Board>
            <Board.Open opens="time">
                <ModalButton icon={<Icon name="Clock" />} />
            </Board.Open>
            <Board.Window name="time">
            <Countdown />
            </Board.Window>
        </Board>
    )
}

export default Time
