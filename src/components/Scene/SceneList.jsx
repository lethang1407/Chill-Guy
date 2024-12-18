import SceneItem from "./SceneItem"
import{ cn } from '../../lib/utils'
export const SceneListData = [
    {
        name: "Scene 1",
        description: "Scene 1",
        image: "/background/scene1.gif",
    },
    {
        name: "Scene 2",
        description: "Scene 2",
        image: "/background/scene2.gif",
    },  
    {   
        name: "Scene 3",
        description: "Scene 3",
        image: "/background/scene3.gif",
    },
    {
        name: "Scene 4",
        description: "Scene 4",
        image: "/background/scene4.gif",
    },
    {
        name: "Scene 5",
        description: "Scene 5",
        image: "/background/scene5.gif",
    },
    {
        name: "Scene 6",
        description: "Scene 6",
        image: "/background/scene6.gif",
    },
    {
        name: "Scene 7",
        description: "Scene 7",
        image: "/background/scene7.gif",
    },
    {
        name: "Scene 8",
        description: "Scene 8",
        image: "/background/scene8.gif",
    },
    {
        name: "Scene 9",
        description: "Scene 9",
        image: "/background/scene9.gif",
    },
    {
        name: "Scene 10",
        description: "Scene 10",
        image: "/background/scene10.gif",
    }
    
]
function SceneList({onCloseModal}) {
    return (
        <ul className={cn("flex gap-2 flex-wrap overflow-y-auto max-h-[80vh] scroll-smooth items-center justify-center mt-5 ")} >
            {SceneListData.map((scene) => (
                <SceneItem key={scene.name} name={scene.name} image={scene.image} onCloseModal={onCloseModal}/>
            ))}
        </ul>
    )
}

export default SceneList
