import { useSelector } from "react-redux"
import {cn} from "../../lib/utils"

function Scenes() {
    const selectedScene = useSelector((state) => state.scene.selectedScene)
    if(!selectedScene){
        return <p>No scene selected</p>
    }
    return (
        <div className={cn("absolute inset-0 z-0 overflow-hidden flex justify-center items-center")}>
        <img   className={cn("w-full h-full object-fill transition-all duration-500 ease-in-out transform  ")} src={selectedScene.image} alt={selectedScene.name} />
      </div>
    )
}

export default Scenes
