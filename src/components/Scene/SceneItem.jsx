import { useDispatch, useSelector } from "react-redux"
import { cn } from "../../lib/utils"
import { setScene,deleteScene } from "../../redux/actions";
import toast from "react-hot-toast";
function SceneItem({name, image, isCustom}) {
    const dispatch = useDispatch();
    const selectedScene = useSelector((state) => state.scene.selectedScene);
    const handleClick= () =>{
        dispatch(setScene({name, image}));
    }
    const handleDelete = (e) => {
        e.stopPropagation(); 
        dispatch(deleteScene(name));
        toast.success("Deleted scene successfully!");
    };
    const isSelected = selectedScene?.name === name;
    return (
        <li
        className={cn(
          "relative cursor-pointer m-2 text-center transition-all duration-500 ease-in-out rounded-sm border",
          isSelected
            ? "border-blue-500 bg-blue-100 shadow-lg" 
            : "border-slate-500 hover:shadow-3xl" 
        )}
        onClick={handleClick}
      >
            <img className={cn("h-[7rem] w-[12rem] p-1")} src={image} alt={name}></img>
            <p className={cn("text-sm pb-3")}>{name}</p>
            {isCustom && (
            <button
                className=" bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute top-1 right-1"
                onClick={handleDelete}
            >
                Delete
            </button>
        )}
        </li>
        
    )
}

export default SceneItem
