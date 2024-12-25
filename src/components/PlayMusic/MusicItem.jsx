import { useDispatch, useSelector } from "react-redux"
import { cn } from "../../lib/utils"
import { setMusic } from "../../redux/actions";

function MusicItem({name,  des, url}) {
    const dispatch = useDispatch();
    const selectedMusic = useSelector((state) => state.music);
    const handleClick = () =>{dispatch(setMusic(name, des,url))};
    const isSelected = selectedMusic?.name === name;
    return (
        <div onClick={handleClick} className={cn("p-2 hover:bg-slate-200 rounded-md hover:text-slate-800 transition-all duration-100 cursor-pointer",
            isSelected
            ? "border-blue-500 bg-blue-500 shadow-lg"
            : "border-slate-500 hover:shadow-3xl")}
            >
            {name}
        </div>
    )
}

export default MusicItem
