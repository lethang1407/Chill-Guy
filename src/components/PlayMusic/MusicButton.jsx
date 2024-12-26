import Menus from "../ui/Menus"
import MusicList from "./MusicList"


function MusicButton() {
    return (
        <>
            <Menus.Toggle name="Music" icon="Music" />
            <Menus.List name="Music">
               <Menus.Button icon="Music"  ><MusicList /></Menus.Button> 
            </Menus.List>
        </>
    )
}

export default MusicButton
