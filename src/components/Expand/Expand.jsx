import { useDispatch, useSelector } from "react-redux";
import Icon from "../ui/Icon";
import ModalButton from "../ui/ModalButton";
import { toggleFullScreen } from "../../redux/actions";
import { useEffect, useState } from "react";

function Expand() {
  const dispatch = useDispatch();
  const [localFullscreen, setLocalFullscreen] = useState(false);
  const fullscreenHandler = () => {
    if (!document.fullscreenElement) {
      const e = document.documentElement;
      e.requestFullscreen().then(() => {
        setLocalFullscreen(true);
        dispatch(toggleFullScreen());
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setLocalFullscreen(false);
          dispatch(toggleFullScreen());
        });
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        setLocalFullscreen(false);
        dispatch(toggleFullScreen());
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        setLocalFullscreen(false);
        dispatch(toggleFullScreen());
      }
    }
  };
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = document.fullscreenElement !== null;
      setLocalFullscreen(isCurrentlyFullscreen);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const iconName = localFullscreen ? "UnScale" : "Scale";

  return (
    <ModalButton
      onClick={fullscreenHandler}
      icon={<Icon name={iconName} />}
    />
  );
}

export default Expand;
