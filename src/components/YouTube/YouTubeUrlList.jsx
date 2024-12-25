import { useDispatch, useSelector } from "react-redux";
import { cn } from "../../lib/utils";
import { deleteVideoUrl, setVideoUrl } from "../../redux/actions";
import toast from "react-hot-toast";

function YouTubeUrlList({ isMinimized }) {
    const dispatch = useDispatch();
    const { listUrls } = useSelector((state) => state.videourl);
   if(isMinimized) return null;
    return (
        <div className={cn("flex flex-col items-center space-y-4 p-1")}>
            <p>Danh sách URL</p>
            {listUrls.map((item, index) => (
                <div key={index} className={cn("flex items-center justify-between w-full max-w-md p-2 border-b")}>
                    <p className={cn("flex-1 text-left flex")}>
                        <strong>{item.url.name}</strong>
                        
                    </p>
                    <button
                        className={cn("bg-blue-400 text-white mr-3 p-1 rounded")}
                        onClick={() => dispatch(setVideoUrl(item.url.url))}
                    >
                       Use
                    </button>
                    <button
                        className={cn("bg-red-500 text-white p-1 rounded")}
                        onClick={() => {
                            dispatch(deleteVideoUrl(item.url));
                            toast.success("Deleted successfully!");
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default YouTubeUrlList;
