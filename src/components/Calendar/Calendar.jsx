
import Icon from "../ui/Icon"
import ModalButton from "../ui/ModalButton"
import CalendarWithNotes from "./CalendarWithNotes"
import Board from "../ui/Board"
function Calendar() {
    return (
        <Board>
            <Board.Open opens="calendar">
                <ModalButton icon={<Icon name="Calendar" />} tooltip="Event Calendar"/>
            </Board.Open>
                <Board.Window name="calendar">
                    <CalendarWithNotes />
                </Board.Window>
        </Board>
    )
}

export default Calendar
