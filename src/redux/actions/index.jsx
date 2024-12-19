
export const setScene = (scene) => ({
    type: "SET_SCENE",
    payload: scene
});
export const setMusic = (name, des, url) => ({
    type: "SET_MUSIC",
    payload: { name, des, url },
})
export const setVolume = (volume) => ({
    type: "SET_VOLUME",
    payload: volume,
})
export const setPlaying = (playing) => ({
    type: "SET_PLAYING",
    payload: playing,
})
export const setPause = (pause) => ({
    type: "SET_PAUSE",
    payload: pause,
})
export const setNext = () => ({
    type: "SET_NEXT",
    payload: null,
})
export const setPrevious = () => ({
    type: "SET_PREVIOUS",
    payload: null,
})