import Board from "../ui/Board"
import Icon from "../ui/Icon";

import ModalButton from "../ui/ModalButton";
import YouTube from "./YouTube";
function YoutubeModal() {
    return (
        <Board>
            <Board.Open opens="youtubeModal">
                <ModalButton icon={<Icon name="Youtube" />} />
            </Board.Open>
            <Board.Window name="youtubeModal">
                <YouTube />
            </Board.Window>
        </Board>
    )
}

export default YoutubeModal
