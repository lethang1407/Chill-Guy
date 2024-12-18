import { useDispatch, useSelector } from "react-redux"
import { cn } from "../../lib/utils"
import { setScene } from "../../redux/actions";
function SceneItem({name, image,onCloseModal}) {
    const dispatch = useDispatch();
    const selectedScene = useSelector((state) => state.scene.selectedScene);
    const handleClick= () =>{
        dispatch(setScene({name, image}));
        if (onCloseModal) {
            onCloseModal();
        }
    }
    const isSelected = selectedScene?.name === name;
    return (
        <li
        className={cn(
          "cursor-pointer m-2 text-center transition-all duration-500 ease-in-out rounded-sm border",
          isSelected
            ? "border-blue-500 bg-blue-100 shadow-lg" 
            : "border-slate-500 hover:shadow-3xl" 
        )}
        onClick={handleClick}
      >
            <img className={cn("h-[7rem] w-[12rem] p-1")} src={image} alt={name}></img>
            <p className={cn("text-sm pb-3")}>{name}</p>
        </li>
    )
}

export default SceneItem
